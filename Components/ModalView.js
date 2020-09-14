import React from 'react';
import { Modal, Share, Dimensions } from 'react-native';
import { Container, Header, Content, Left, Right, Body, Title, Button, Icon } from 'native-base';
import { WebView } from 'react-native-webview';

function ModalView ({ viwModal, modalArticleData, handleClose }) {

  // 높이 구하기
  const viewHeight = Dimensions.get('window').height - 100;

  // 공유
  const handleShare = () => {
    const {title, url} = modalArticleData;
    const message = `${title}\n\nRead More @${url}\n\nShared via RN News App`;
    return Share.share(
      { title, message, url: message },
      { dialogTitle: `Share ${title}` }
    );
  }

  return (
    <Modal
      animationType="slide"      
      visible={viwModal}
      transparent
      onRequestClose={handleClose}
    >
      <Container>
        <Header>
          <Left>
            <Button onPress={handleClose} transparent>
              <Icon name='close' />
            </Button>
          </Left>
          <Body>
            <Title>{modalArticleData.title}</Title>
          </Body>
          <Right>
            <Button transparent onPress={handleShare}>
              <Icon name='share' />
            </Button>
          </Right>
        </Header>
        <Content>
          <WebView 
            containerStyle={{ height: viewHeight }}
            source={{ uri: modalArticleData.url }}
            style={{ flex: 1 }}
            error={handleClose}
            startInLoadingState
            scalesPageToFit
          />
        </Content>
      </Container>
    </Modal>
  );
};

export default ModalView;