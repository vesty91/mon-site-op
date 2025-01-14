import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  RedditShareButton,
} from 'react-share';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaReddit,
} from 'react-icons/fa';
import './SocialShare.css';

function SocialShare({ url, title, description }) {
  return (
    <div className="social-share">
      <FacebookShareButton url={url} quote={title}>
        <FaFacebook />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title}>
        <FaTwitter />
      </TwitterShareButton>
      <LinkedinShareButton url={url} title={title} summary={description}>
        <FaLinkedin />
      </LinkedinShareButton>
      <RedditShareButton url={url} title={title}>
        <FaReddit />
      </RedditShareButton>
    </div>
  );
}

export default SocialShare;
