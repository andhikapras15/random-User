import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import "antd/dist/antd.css";
import { UserModal } from "./usersModal";

const UserCard = ({ listUser, loading }) => {
  return (
    <>
      {loading ? (
        <p>loadingg...</p>
      ) : (
        listUser.map((item, index) => {
          return (
            <div className={styles.card} key={index}>
              <div className={styles.headerCard}>
                <img
                  src={item?.picture?.thumbnail}
                  alt="profile"
                  className={styles.profilePic}
                />
                <UserModal dataUser={item} loading={loading} />
              </div>
              <div className>
                <div>
                  <span style={{ fontWeight: "bold" }}>Name : </span>
                  <span>
                    {item?.name?.title} <nbsp />
                    {item?.name?.first} <nbsp />
                    {item?.name?.last}
                  </span>
                </div>
                <div>
                  <span style={{ fontWeight: "bold" }}>Email : </span>
                  <span>{item?.email}</span>
                </div>
                <div>
                  <span style={{ fontWeight: "bold" }}>City : </span>
                  <span>
                    {item?.location?.city}, {item?.location?.country}
                  </span>
                </div>
                <div>
                  <span style={{ fontWeight: "bold" }}>Born Date : </span>
                  <span>{item?.dob?.date}</span>
                </div>
                <div>
                  <span style={{ fontWeight: "bold" }}>Age : </span>
                  <span>{item?.dob?.age} tahun</span>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default UserCard;
