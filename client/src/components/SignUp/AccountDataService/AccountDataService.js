import axios from "axios";

class AccountDataService {
  sendData(data) {
    axios
      .post("http://localhost:3090/api/developer/account/create", {
        data: data
      })
      .then(function(res) {
        console.log(res);
      })
      .catch(function(err) {
        console.log(err);
      });
  }
}

export default AccountDataService;
