"use strict";



//  I M P O R T

import posts from "./_posts.js";

//  U T I L

const lookup = new Map();



//  P R O G R A M

posts.forEach(post => {
  lookup.set(post.slug, JSON.stringify(post));
});



//  E X P O R T

export function get(req, res, next) { // eslint-disable-line no-unused-vars
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const { slug } = req.params;

  if (lookup.has(slug)) {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(lookup.get(slug));
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json"
    });

    res.end(JSON.stringify({
      message: "Not found"
    }));
  }
}
