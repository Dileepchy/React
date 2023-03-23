/* Rendering List */
import React from "react";

function Button() {
  return <button>I'm a button</button>;
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>
        Hello there <br /> How do you do?
      </p>
    </>
  );
}

function Profile() {
  const user = {
    name: "Mani Kul",
    imageUrl:
      "https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/260680934_130347539419193_345813746490618357_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=-0z1uP1IZIoAX9kENaK&_nc_ht=scontent.fktm10-1.fna&oh=00_AfB1ctK6UmugIkWrhX9mM-KMcd3sdF71AIw_dgheqHrpFQ&oe=641DD104",
    imageSize: 600,
  };
  return (
    <>
      <h1>{user.name}</h1>
      <img
        src={user.imageUrl}
        alt={"photo of" + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}

function MyProfile() {
  const profile = {
    names: "Dil Lip",
    imgUrl:
      "https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/318445249_2232774283563997_6097562253991607948_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=0debeb&_nc_ohc=uHvmpgdvttoAX_ZngBP&_nc_ht=scontent.fktm10-1.fna&oh=00_AfDN-WeXmncqMY-TjnQUBiSCTwsiUyE8gGjEyFdLCskr6A&oe=641F4003",
    imgSize: 600,
  };

  return (
    <>
      <h1>{profile.names}</h1>
      <img
        src={profile.imgUrl}
        alt={"Photo of " + profile.names}
        style={{
          height: profile.imgSize,
          width: profile.imgSize,
        }}
      />
    </>
  );
}

const products = [
  { title: "Cabage", isFruit: false, id: 1 },
  { title: "Carrot", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
  { title: "Orange", isFruit: true, id: 4 },
  { title: "Banana", isFruit: true, id: 5 },
  { title: "Chilli", isFruit: false, id: 6 },
];

export default function ShoppingList() {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "darkgreen",
      }}
    >
      {product.title}
    </li>
  ));
  return (
    <div>
      <ul>{listItems}</ul>
      <AboutPage />
      <MyProfile />
      <Profile />
      <Button />
    </div>
  );
}
