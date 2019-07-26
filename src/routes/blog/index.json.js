"use strict";



//  I M P O R T

import posts from "./_posts.js";



//  P R O G R A M

const contents = JSON.stringify(posts.map(post => {
  return {
    title: post.title,
    slug: post.slug
  };
}));



//  E X P O R T

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(contents);
}
