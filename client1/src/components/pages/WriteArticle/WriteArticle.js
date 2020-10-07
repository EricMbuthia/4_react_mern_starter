import React, { useState } from 'react';
import './WriteArticle.css';

function WriteArticle(props) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  function onChangeContent(ev) {
    setText(ev.target.value);
  }

  function onChangeTitle(ev) {
    setTitle(ev.target.value);
  }

  function submit() {
    console.log('TODO: Use POST to add new article');
    const formData = {
      title: title,
      text: text,
    };

    const fetchOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData),
    };

    fetch('/api/mongodb/blogposts/', fetchOptions)
      .then(response => response.json())
      .then(data => {
        console.log('Got this back', data);
      });
      props.history.push('/')

  }


  
    return (
      <div className="WriteArticle">
        <h1>Write an article</h1>
        <input
            name="title"
            placeholder="Title"
            value={title}
            onChange={onChangeTitle}
          />
        <br />

        <textarea
            name="content"
            placeholder="Contents"
            value={text}
            onChange={onChangeContent}
          />

        <br />

        <button onClick={submit}>Add to blog</button>
      </div>

    );
  
}

export default WriteArticle;
