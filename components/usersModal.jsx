import { useState } from "react";
import { Card, Button, Modal } from "antd";
import styles from "../styles/Home.module.css";

export const UserModal = ({ dataUser, loading }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {loading ? (
        <p>loadingg...</p>
      ) : (
        <div>
          <button onClick={showModal}>detail</button>
          <Modal
            title="User Detail"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <div>
              <img
                src={dataUser?.picture?.thumbnail}
                alt="profile"
                className={styles.detailProfilePic}
              />
            </div>
            <div>
              <span style={{ fontWeight: "bold" }}>Name : </span>
              <span>
                {dataUser?.name?.title} <nbsp />
                {dataUser?.name?.first} <nbsp />
                {dataUser?.name?.last}
              </span>
            </div>
            <div>
              <span style={{ fontWeight: "bold" }}>Email : </span>
              <span>{dataUser?.email}</span>
            </div>
            <div>
              <span style={{ fontWeight: "bold" }}>City : </span>
              <span>
                {dataUser?.location?.city}, {dataUser?.location?.country}
              </span>
            </div>
            <div>
              <span style={{ fontWeight: "bold" }}>Born Date : </span>
              <span>{dataUser?.dob?.date}</span>
            </div>
            <div>
              <span style={{ fontWeight: "bold" }}>Age : </span>
              <span>{dataUser?.dob?.age} tahun</span>
            </div>
            <div>
              <span style={{ fontWeight: "bold" }}>Address : </span>
              <span>
                {dataUser?.location?.street?.name},{" "}
                {dataUser?.location?.street?.number}, {dataUser?.location?.city}
                , {dataUser?.location?.state}, {dataUser?.location?.postcode},{" "}
                {dataUser?.location?.country}
              </span>
            </div>
          </Modal>
        </div>
      )}
    </>
  );
};
