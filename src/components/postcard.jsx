// src/components/PostCard.jsx
import LikeButton from "./likebutton";

function PostCard({ profilePic, username, postContent }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "16px",
        margin: "10px",
        maxWidth: "400px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src={profilePic}
          alt="Profile"
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        />
        <h4>{username}</h4>
      </div>
      <p>{postContent}</p>
      <LikeButton />
    </div>
  );
}

export default PostCard;
