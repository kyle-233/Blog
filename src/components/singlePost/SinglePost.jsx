import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b>Kyle</b></span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p  className="singlePostDesc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem blanditiis similique earum voluptatum fugiat corrupti aut enim, architecto ipsa officia quam suscipit nesciunt, ea, rem placeat consectetur iusto quo quibusdam!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi neque eos repellendus? Accusamus ipsum in excepturi quae officiis modi ducimus illum iusto. Sit harum blanditiis ea distinctio atque ab odit!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nisi asperiores dignissimos aut nulla molestiae, sed iusto praesentium adipisci ratione veritatis saepe iure cumque ipsum eveniet culpa quo? Inventore, nostrum.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat minima fugit, nulla laboriosam alias et itaque minus possimus provident maxime cum ex iusto in sunt tempore. Ullam tempore minima velit?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorem rerum ut eligendi repellat doloremque corrupti? Eum aliquid recusandae fugiat adipisci quas veniam cumque eaque. Recusandae deserunt suscipit fuga in.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius natus perferendis illo delectus sit, veniam labore ipsum maxime velit voluptatem esse iste cupiditate adipisci non nihil accusamus incidunt nobis autem.
          </p>
      </div>
    </div>
  )
}
