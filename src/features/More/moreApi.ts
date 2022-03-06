import axios from "axios";

const moreApi = {
  getCategories: async () => {
    const result = await axios.get(
      "https://sp1liv.maariv.co.il/wp-json/sport1/v1/navigation",
      { headers: { "x-sport1-mobile-app": true } } //Key-value
    );
    return result.data;
  },
};

export default moreApi;
