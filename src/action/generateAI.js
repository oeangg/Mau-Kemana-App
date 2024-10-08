"use server";
import { openAI } from "@/util/openai";

export async function generateDestinasi(_prevState, formData) {
  const city = formData.get("city");

  try {
    const response = await openAI.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: [
            {
              type: "text",
              text: 'You are an experienced tour guide who has traveled around Indonesia\nPlease provide 5 recommendations for tourist destinations that must be visited from the city provided by users\nthen provide the following information in detail:\n- destination name\n- destination information and activities that can be done, provide in 150 words\n- complete address, add state name, street number, village, district and zip code\n- entrance ticket price if any\n- favorite restaurant and a distance of less than 2 kilometers from the tourist destination, explain the menu and distance from the tourist destination\n\nIMPORTANT:\nalways respone with valid JSON Object, If the destination is found, add text to object name "status" with "FOUND", add message which contains information tourist destinations and about souvenirs typical of the city to object name "message" , and object name : "destinations" [],  and following keys:\n- no: number\n- name: string\n- information: string\n- address : string\n- ticketPrice : string\n- restaurant: string\n\nIMPORTANT:\nyou always answer in bahasa indonesia \n\nIMPORTANT:\nresult DO NOT INCLUDE ```json\n\nCRITICAL:\nfirst check if city the user provided is the correct city name. if not the name of the city or not a city in Indonesia. add text to object name "status" with "NOT FOUND", and add a message to object name : "message" : string',
            },
          ],
        },
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `carikan destinasi wisata di kota ${city}`,
            },
          ],
        },
      ],
      temperature: 1,
      max_tokens: 2048,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      response_format: {
        type: "text",
      },
    });

    const result = JSON.parse(response.choices[0].message.content);

    return result;
  } catch (error) {
    console.log(error);
  }
}
