import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Container, Content, List } from 'native-base';
import DataItem from './DataItem';
import ModalView from './ModalView';
import { useDispatch, useSelector } from 'react-redux';
import { getEnterArticles } from '../modules/news'

function tabThree () {
  const { loading, data } = useSelector((state) => state.news.entertainment);

  const dispatch = useDispatch();

  const [viwModal, setViewModal] = useState(false);
  const [modalArticleData, setModalArticleData] = useState({});

  // 모달열기 함수
  const handleClick = (articleData) => {
    setViewModal(true);
    setModalArticleData(articleData);
  };

  // 모달 닫기 함수
  const handleClose = () => {
    setViewModal(false);
    setModalArticleData({});
  };

  useEffect(() => {
    dispatch(getEnterArticles());
  }, [dispatch]);

  const pageView = loading ? (
    <View>
      <ActivityIndicator animating={loading} size="large" />
      <Text style={{ marginTop: 10 }}>로딩중...</Text>
    </View>
  ) : (
    <List
      dataArray={data}
      renderRow={(article) => {
        return <DataItem article={article} handleClick={handleClick} />
      }}
    />
  );

  return (
    <Container>
      <Content>
        {pageView}
      </Content>
      <ModalView 
        viwModal={viwModal} 
        modalArticleData={modalArticleData} 
        handleClose={handleClose} 
      />
    </Container>
  );
}

export default tabThree;