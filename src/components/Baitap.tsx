import React from "react";
import "./baitap.css";
import "../bootstrap-5.3.3-dist/css/bootstrap.min.css";
import "../bootstrap-5.3.3-dist/js/bootstrap.bundle.min.js";

class Baitap extends React.Component {
  render() {
    return (
      <div>
        <div className="truyentranh container text-center">
          <div className="row align-items-center">
            <div className="col-3 manga ">
              <img
                src="https://upload.wikimedia.org/wikipedia/vi/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg"
                alt="One Piece"
                width={180}
                height={280}
              />{" "}
              <br />
              <b className="title">One Piece</b> <br />
              <b className="newprice">16.380đ</b>
              <p className="oldprice">23.000đ</p>
            </div>
            <div className="col-3 manga">
              <img
                src="https://m.media-amazon.com/images/S/pv-target-images/334f00b53cf3ef848ea7048b25711bc98e8236ce1685a096990c80d0965835ea.png"
                alt="Dragon Ball"
                width={180}
                height={280}
              />{" "}
              <br />
              <b className="title">Dragon Ball</b> <br />
              <b className="newprice">23.380đ</b>
              <p className="oldprice">29.000đ</p>
            </div>
            <div className="col-3 manga">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/d/de/Your_Lie_in_April_Manga_cover.png"
                alt="Lier April"
                width={180}
                height={280}
              />{" "}
              <br />
              <b className="title">Lier April</b> <br />
              <b className="newprice">8.380đ</b>
              <p className="oldprice">14.000đ</p>
            </div>
            <div className="col-3 manga">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/e/e2/Demon_Lord_2099_light_novel_volume_1_cover.jpg"
                alt="Maou 2099"
                width={180}
                height={280}
              />{" "}
              <br />
              <b className="title">Maou 2099</b> <br />
              <b className="newprice">32.380đ</b>
              <p className="oldprice">50.000đ</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Baitap;
