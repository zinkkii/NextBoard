export default function Write() {
  return (
    <div className="list-bg">
      <div className="p-20">
        <h4>글 작성</h4>
        <form action="/api/post/write" method="POST">
          <input name="title" placeholder="제목" />
          <input name="content" placeholder="내용" />
          <input name="user_id" placeholder="작성자" />
          <button type="submit">작성</button>
        </form>
      </div>
    </div>
  );
}
