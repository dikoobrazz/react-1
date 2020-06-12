import React from "react";
import cls from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={cls.profile}>
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
      <div>
        My posts
        <div>New posts</div>
      </div>
      <div className={cls.posts}>
        <div className={cls.item}>Post-1</div>
        <div className={cls.item}>Post-2</div>
        <div className={cls.item}>Post-3</div>
      </div>
    </div>
  );
};

export default Profile;
