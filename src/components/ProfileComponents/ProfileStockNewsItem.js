import React from 'react'
import { Card, Button, Image } from 'semantic-ui-react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {copyToClipBoard} from '../../actions/copiedArticleActions' // my Action

import '../../App.css';


import { connect } from 'react-redux';

class ProfileNewsStockItem extends React.Component {

  copyToClip = (articleUrl) => {
    this.props.copyToClipBoard(articleUrl) // action
  }

  
  render() {
    return (
      <Card >
        <h1 className="display-2 text-centre">
          <a href={this.props.article.url } target="_blank" rel="noopener noreferrer">{this.props.article.title}</a>
        </h1> 
        <div className="news-source" >
          {this.props.article.source.name}
        </div>
        <Image className="profile-card-image" src={this.props.article.urlToImage} alt={this.props.article.title} />
        <div className="row pt-4 text-left">
          {this.props.article.description} 
        </div>

        <div className="More-button">
          <a href={this.props.article.url} target="_blank" rel="noopener noreferrer">
            <Button className="btn btn-outline-secondary">Read more..</Button>
          </a>
        </div>
        <CopyToClipboard onCopy={() => this.copyToClip(this.props.article.url)} text={this.props.article.url}>
          <Button className="copy-clipboard-btn" 
            color={ this.props.urlCopied !== this.props.article.url ?  "instagram" : "green"}>
            {this.props.urlCopied !== this.props.article.url ?
            "Copy url to clipboard"
            :
            "Copied"
            }
            </Button>
        </CopyToClipboard> 
      </Card> 

    ) 
  } 
}

const mapStateToProps = (state) => {
  return {
    urlCopied: state.copiedArticleStore.urlCopied,
  } 
}


const mapDispatchToProps = (dispatch) => {
  return {
    copyToClipBoard: (articleUrl) => copyToClipBoard(dispatch, articleUrl) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileNewsStockItem)
