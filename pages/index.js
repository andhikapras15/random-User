import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import UserCard from "../components/userCard";
import axios from "axios";
import { useEffect, useState } from "react";
import "antd/dist/antd.css";

export default function Home({ dataUsers: initialUsers }) {
  const [dataUser, setDataUser] = useState([initialUsers]);
  const [loading, setLoding] = useState(true);
  const [filterNat, setFilterNat] = useState("AU");
  const [start, setStart] = useState(0);
  const [users, setUsers] = useState(initialUsers);

  // get first list user
  const listDataUser = async () => {
    setLoding(true);
    const res = await axios.get(
      ` https://randomuser.me/api/?page=1&results=10&nat=${filterNat}`
    );
    setDataUser(res.data.results);
    setStart(start);
    setLoding(false);
  };
  // infinite scroll
  async function loadMore() {
    const req = await axios.get(
      `https://randomuser.me/api/?page=${start}&results=10&nat=${filterNat}`
    );
    const users = await req.data.results;
    setDataUser([...dataUser, ...users]);
    setStart(start + 10);
  }
  // filter list user by country
  const filterNationality = async () => {
    const req = await axios.get(
      `https://randomuser.me/api/?page=${start}&results=10&nat=${filterNat}`
    );
    const users = await req.data.results;
    setDataUser(dataUser);
    setStart(start);
  };
  // const handleScroll = (e) => {
  //   if (
  //     window.innerHeight + e.target.documentElement.scrollTop + 1 >
  //     e.target.documentElement.scrollHeight
  //   ) {
  //     loadMore();
  //   }
  // };

  useEffect(() => {
    listDataUser();
    filterNationality();
    // loadMore();
    // window.addEventListener("scroll", handleScroll);
  }, [filterNat]);

  return (
    <div style={{ backgroundColor: "slategrey" }}>
      <div className={styles.homeLayout}>
        <div className={styles.homeHeader}>
          <span>List User</span>
          <div>
            <span style={{ marginRight: 5 }}>Filter Nationality By :</span>
            <select
              value={filterNat}
              onChange={(e) => setFilterNat(e.target.value)}
            >
              <span>Fiter Nationality By</span>
              <option>AU</option>
              <option>BR</option>
              <option>CA</option>
              <option>CH</option>
              <option>DE</option>
              <option>DK</option>
              <option>ES</option>
              <option>FI</option>
              <option>FR</option>
              <option>GB</option>
              <option>IE</option>
              <option>IR</option>
              <option>NO</option>
              <option>NL</option>
              <option>NZ</option>
              <option>TR</option>
              <option>US</option>
            </select>
          </div>
        </div>
        <UserCard listUser={dataUser} loading={loading} />
      </div>
      <button
        style={{ marginTop: 22, alignItems: "center", marginLeft: 590 }}
        onClick={loadMore}
      >
        load more
      </button>
    </div>
  );
}

export async function getServerSideProps() {
  const req = await axios(" https://randomuser.me/api/?page=1&results=10");
  const users = await req.data.results;

  return {
    props: {
      users,
    },
  };
}
