import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import * as S from './Board.style';
import { getPosts } from '../api/boardapi';
import { Database } from '../types/supabase';
import { useState } from 'react';
type ReadPosts = Database['public']['Tables']['posts']['Row'];

const Board = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchKeyword, setSearchKeyword] = useState<string>(''); // 추가된 부분

  const handleWriteClick = () => {
    navigate('/board/write');
  };

  const handleAllClick = () => {
    setSelectedCategory(null);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const {
    data: posts,
    isLoading,
    isFetching,
  } = useQuery<ReadPosts[]>(
    ['posts', selectedCategory, searchKeyword], // 검색 키워드 추가된 부분
    () => getPosts(selectedCategory || ''),
    {
      onError: (error) => {
        console.error('Error fetching posts:', error);
      },
    },
  );

  // 검색 결과에 따라 게시물 리스트를 필터링
  const filteredPosts = posts?.filter(
    (post) =>
      post.title.includes(searchKeyword) ||
      post.content.includes(searchKeyword),
  );

  const handlePostClick = (postId: string) => {
    navigate(`/board/${postId}`);
  };

  const handleMenuClick = (menu: string) => {
    navigate(`/menu/${menu}`);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSelectedCategory(null);
    queryClient.invalidateQueries(['posts', null, searchKeyword]);
  };

  return (
    <div>
      <S.Title>게시판</S.Title>
      <S.WriteButton onClick={handleWriteClick}>글 작성</S.WriteButton>
      <div>
        <S.Button onClick={handleAllClick}>전체</S.Button>
        <S.Button onClick={() => handleCategoryClick('애니')}>애니</S.Button>
        <S.Button onClick={() => handleCategoryClick('자유')}>자유</S.Button>
        <S.Button onClick={() => handleCategoryClick('오류 신고')}>
          오류 신고
        </S.Button>
      </div>

      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="검색어 입력"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <button type="submit">검색</button>
      </form>

      <ul>
        {isFetching ? (
          <div>Loading...</div>
        ) : filteredPosts ? (
          filteredPosts.map((post: ReadPosts) => (
            <S.Postbox
              key={post.id}
              onClick={() => post.id && handlePostClick(post.id.toString())}
            >
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </S.Postbox>
          ))
        ) : (
          <div>검색 결과 없음</div>
        )}
      </ul>
    </div>
  );
};

export default Board;
