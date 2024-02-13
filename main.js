document.addEventListener("DOMContentLoaded", () => {
  function renderRandomImage(src) {
    // Create a new image element
    var img = document.createElement("img");
    // Set the src attribute of the image
    img.src = src; // Thay đổi 'path_to_your_image.jpg' bằng đường dẫn đến hình ảnh của bạn

    // Set the position of the image randomly
    var containerWidth = container.offsetWidth;
    var containerHeight = container.offsetHeight;

    var randomX = Math.floor(Math.random() * (containerWidth - 100)); // 100 is the width of the image
    var randomY = Math.floor(Math.random() * (containerHeight - 100)); // 100 is the height of the image

    img.style.position = "absolute";
    img.style.left = randomX + "px";
    img.style.top = randomY + "px";

    // Append the image to the container
    container.appendChild(img);
  }
  function renderObject() {
    // Tạo một đối tượng mới hoặc thực hiện các thao tác render tại đây
    const help = document.querySelector(".help");
    help.innerHTML = `<div class="sos">
    <h1>Nhân dịp Valentine nữa</h1>
    <h1>Mình cũng ko có chuẩn bị gì nhiều được tại là có tận 50 crush lận :(</h1>
    <h1>Chỉ mong Chúc lúc nào cũng ngoan xinh yêu như bây giờ :></h1>
    <h1>Thế thui :))) </h1>
  </div>`;
  }

  // Gọi hàm renderObject() sau 3 giây
  const hehe = document.querySelector(".hehe");
  const container = document.querySelector(".IMG");
  const srcIMG = [
    { src: "./images/chanh.jpg" },
    { src: "./images/daudau.jpg" },
    { src: "./images/honghot.jpg" },
    { src: "./images/huongngoai.jpg" },
    { src: "./images/lowkeynt.jpg" },
    { src: "./images/luoihoc.jpg" },
    { src: "./images/ngoan.jpg" },
    { src: "./images/nhanhchan.jpg" },
    { src: "./images/nhieu.jpg" },
    { src: "./images/nhinan.jpg" },
    { src: "./images/phu.jpg" },
    { src: "./images/redflag.jpg" },
    { src: "./images/tretrau.jpg" },
    { src: "./images/votrachnhiem.jpg" },
    { src: "./images/votree.jpg" },
  ];
  hehe.addEventListener("click", () => {
    hehe.innerHTML = `<h1> Năm mới xin phép viết cho bạn một chút </h1>`;
    hehe.addEventListener("click", () => {
      hehe.innerHTML = `<h1>Mình thì cũng lười viết nữa =))</h1>`;
      hehe.addEventListener("click", () => {
        hehe.innerHTML = `Thế nên mình code cho dễ nhá`;
        hehe.addEventListener("click", () => {
          hehe.innerHTML = "Năm mới chúc bạn không còn...";
          hehe.addEventListener("click", () => {
            renderRandomImage("./images/chanh.jpg");
            hehe.addEventListener("click", () => {
              srcIMG.forEach((obj) => {
                renderRandomImage(obj.src);
              });
              container.addEventListener("click", () => {
                console.log(1);
                renderObject();
              });
            });
          });
        });
      });
    });
  });
});
