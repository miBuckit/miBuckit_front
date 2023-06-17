import axios from "axios";

export default function Test() {
  const handleOnClick1 = () => {
    const url = "http://localhost:8080/test/get";
    axios
      .get(url, {
        params: {
          testId: "1",
        },
      })
      .then((response) => {
        console.log(response.data);
        console.log("");
      })
      .catch((error) => {
        console.log("실패");
      });
  };

  const handleOnClick2 = () => {
    const data = { testNm: "test123123", testPw: "123123123" };
    const url = "http://localhost:8080/test/post";
    axios
      .post(url, data)
      .then((response) => {
        console.log(response.data);
        console.log("");
      })
      .catch((error) => {
        console.log("실패");
      });
  };

  const handleOnClick3 = () => {
    const data = { testId: "13", testNm: "test1131314", testPw: "11414414" };
    const url = "http://localhost:8080/test/put";
    axios
      .put(url, data)
      .then((response) => {
        console.log(response.data);
        console.log("");
      })
      .catch((error) => {
        console.log("실패");
      });
  };

  return (
    <div>
      <h1>test page입니다</h1>
      <div>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={handleOnClick1}
        >
          retrieveTest
        </button>
      </div>
      <div>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={handleOnClick2}
        >
          insertTest
        </button>
      </div>
      <div>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={handleOnClick3}
        >
          updateTest
        </button>
      </div>
    </div>
  );
}
