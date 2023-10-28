import type { PageServerLoad } from "./$types";
import { fail, json, type HandleFetch } from "@sveltejs/kit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";


export const load: PageServerLoad = async ({ locals: { LL }, platform }) => {
  console.info(LL.log({ fileName: "+page.server.ts" }));

  return;
};

export const actions = {

  default: async ({ cookies, request, fetch, url, platform }) => {
    const formData = await request.formData();

    const headers = {
      Authorization: "Basic " + btoa("teststring" + ":"),
      "Content-Type": "application/json",
    };

    const response = await fetch('https://stg.mul-bill.jp/v1/tokens/bank_accounts/prereq', {
      method: "POST",
      headers: headers,
    });

    const result = await response.json();
    if (!result.token) {
      console.log("failed");
    }

    console.log(result.token);
    return {
    };
  },
};
