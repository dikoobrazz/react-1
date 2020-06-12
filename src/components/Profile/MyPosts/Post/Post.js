import React from "react";
import cls from "./Post.module.css";

const Post = () => {
  return (
    <div className={cls.item}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_B-GqXD5lkkAzRU_SbJwnfFnUAQEEBRKvJpaVe74Vw6Lkivme&usqp=CAU"
        alt=""
      />
      Post-1
    </div>
  );
};

export default Post;
