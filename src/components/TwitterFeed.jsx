import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import './TwitterFeed.css';

function TwitterFeed() {
  return (
    <div className="twitter-feed">
      <h2>Suivez-nous sur Twitter</h2>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="TwitterDev"
        options={{ height: 400 }}
      />
    </div>
  );
}

export default TwitterFeed;
