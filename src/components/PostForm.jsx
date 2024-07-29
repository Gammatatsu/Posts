import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = function ({create}) {
  const [post, setPost] = useState({title:'',body:''})
  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
        ...post,id:Date.now()
    }
    create(newPost)
    setPost({title:'',body:''})

    
    
  }
    return (
        <div>
             <form>
        <MyInput
          type='text' value={post.title} placeholder='Название поста'
          onChange={e => setPost({...post,title: e.target.value})}
        />
        <MyInput type='text' value={post.body} placeholder='Описание поста' onChange={e => setPost({...post,body: e.target.value})} />
        <MyButton onClick={addNewPost} >Создать пост</MyButton>
      </form>
        </div>
    )
}

export  default PostForm;