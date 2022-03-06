import { createAsyncThunk } from "@reduxjs/toolkit";
import moreRepository from "./moreRepository";

const moreAsync = {
  getCategories: createAsyncThunk("more/getCategories", async () => {
    const result = await moreRepository.getCategories();
    return result;
  }),
};

export default moreAsync;
