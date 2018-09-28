import React, { Component } from 'react';
import './Card.css';
import TwitterLogo from './images/twitter.svg';
import FacebookLogo from './images/facebook.svg';
import InstagramLogo from './images/instagram.svg';

class Card extends Component {
  render(props) {
    return (
      <div className="Card">
        <div className="Card-thumbnail">
          <img src={this.props.image_url} alt="Imagen de {this.props.name}" title={this.props.name} />
        </div>

        <div className="Card-content">
          <h2 className="Card-title">{this.props.name}</h2>

          {this.props.location &&
            <span className="Card-location">{this.props.location}</span>
          }

          <p className="Card-text">{this.props.description}</p>

          <div className="Card-social">
            {this.props.twitter_url &&
              <a href={this.props.twitter_url} title="Twitter" target="_blank" rel="noopener noreferrer">
                <img width="16" height="16" src={TwitterLogo} alt="Twitter" title="Twitter" />
              </a>
            }

            {this.props.facebook_url &&
              <a href={this.props.facebook_url} title="Facebook" target="_blank" rel="noopener noreferrer">
                <img width="16" height="16" src={FacebookLogo} alt="Facebook" title="Facebook" />
              </a>
            }

            {this.props.instagram_url &&
              <a href={this.props.instagram_url} title="Instagram" target="_blank" rel="noopener noreferrer">
                <img width="16" height="16" src={InstagramLogo} alt="Instagram" title="Instagram" />
              </a>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
