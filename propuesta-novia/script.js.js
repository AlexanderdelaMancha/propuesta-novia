body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  background: #fff;
  color: #000;
}

body::before {
  content: "";
  position: absolute;
  inset: 0;
  background: url("https://i.pinimg.com/originals/f5/da/0d/f5da0de0a537454a6a534c929664ee77.jpg") center/cover no-repeat;
  opacity: 0.9;
  z-index: -1;
}

h1 {
  font-size: 2em;
  color: #ff4d6d;
  text-shadow: 1px 1px 6px #fff;
  margin-bottom: 30px;
}

button {
  padding: 12px 25px;
  font-size: 1.2em;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  margin: 10px;
  transition: all 0.3s ease;
}

#yes {
  background-color: #ff4d6d;
  color: white;
  box-shadow: 0 4px 8px rgba(0,0,0,0.4);
}

#no {
  background-color: #444;
  color: white;
  position: absolute;
}

#playMusic {
  margin-top: 20px;
  background-color: #ffb3c1;
  color: #000;
}

.final {
  text-align: center;
}

.final img {
  width: 250px;
  border-radius: 15px;
  margin-top: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.5);
}