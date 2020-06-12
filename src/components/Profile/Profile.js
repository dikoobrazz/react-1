import React from "react";
import cls from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div>
        <img
          className={cls.big_image}
          src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"
        />
      </div>
      <div>
        <img
          className={cls.small_image}
          src="https://earthsky.org/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg"
          alt=""
        />
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
