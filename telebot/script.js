// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
"use strict";

const functions = require("firebase-functions");
const { WebhookClient } = require("dialogflow-fulfillment");
const { Card, Suggestion } = require("dialogflow-fulfillment");
const mysql = require("mysql");
const axios = require("axios");
var moment = require("moment");

process.env.DEBUG = "dialogflow:debug"; // enables lib debugging statements

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(
  (request, response) => {
    const agent = new WebhookClient({ request, response });
    const keywords = agent.parameters.keyword;
    console.log(
      "Dialogflow Request headers: " + JSON.stringify(request.headers)
    );
    console.log("Dialogflow Request body: " + JSON.stringify(request.body));

    function welcome(agent) {
      agent.add(`Welcome to my agent!`);
    }

    function fallback(agent) {
      agent.add(`I didn't understand`);
      agent.add(`I'm sorry, can you try again?`);
    }

    function connectToDatabase() {
      const connection = mysql.createConnection({
        host: "8.tcp.ngrok.io",
        user: "root",
        password: "",
        database: "telebot",
        port: "14201",
      });
      return new Promise((resolve, reject) => {
        connection.connect();
        resolve(connection);
      });
    }

    function queryDatabase(connection) {
      return new Promise((resolve, reject) => {
        connection.query(
          "SELECT * FROM keyword where keyword LIKE " + "'%" + keywords + "%'",
          (error, results, fields) => {
            resolve(results);
          }
        );
      });
    }

    function handleReadFromMySQL(agent) {
      return connectToDatabase().then((connection) => {
        return queryDatabase(connection).then((result) => {
          if (result === undefined) {
            agent.add(`Basis data gagal  terhubung`);
          } else {
            agent.add(`Basis data berhasil terhubung`);
            connection.end();
          }
        });
      });
    }

    function InfoCovidToday(agent) {
      return axios({
        method: "GET",
        url: "https://covid-193.p.rapidapi.com/history",
        headers: {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "covid-193.p.rapidapi.com",
          "x-rapidapi-key":
            "7603acf3bamsh8406af94904d928p1a6b4cjsn49330239d75f",
          useQueryString: true,
        },
        params: {
          day: moment(new Date()).format("YYYY-MM-DD"),
          country: "indonesia",
        },
      }).then((response) => {
        agent.add(
          "Data covid di " +
            response.data.response[0].country +
            `\n` +
            "tanggal : " +
            response.data.response[0].time.substring(0, 10) +
            " Jam " +
            response.data.response[0].time.substring(11, 19) +
            "\n" +
            "Total kasus : " +
            response.data.response[0].cases.total +
            "\n" +
            "Kasus aktif : " +
            response.data.response[0].cases.active +
            ", Kasus baru : " +
            response.data.response[0].cases.new +
            ", Sembuh : " +
            response.data.response[0].cases.recovered +
            "\n" +
            "Total Kematian : " +
            response.data.response[0].deaths.total +
            ", kematian hari ini : " +
            response.data.response[0].deaths.new +
            "\n" +
            "Sumber :  https://covid-193.p.rapidapi.com/history"
        );
      });
    }

    function PengertianCovid(agent) {
      return connectToDatabase().then((connection) => {
        return queryDatabase(connection).then((result) => {
          console.log("hasilnya adalahhh : " + result);
          if (result.length === 0) {
            agent.add("keyword tidak ditemukan di database");
          }
          result.map((content) => {
            if (keywords === content.keyword) {
              agent.add(`${content.results}`);
            }
          });
          connection.end();
        });
      });
    }

    /** awal function*/
    function ListKeywordBot(agent) {
      return connectToDatabase().then((connection) => {
        return queryDatabase(connection).then((result) => {
          console.log(result);
          if (result.length === 0) {
            agent.add("keyword tidak ditemukan di database");
          }
          result.map((content) => {
            if (keywords === content.keyword) {
              agent.add(`${content.results}`);
            }
          });
          connection.end();
        });
      });
    }
    /** akhir function*/

    /** awal function*/
    function GejalaCovid(agent) {
      return connectToDatabase().then((connection) => {
        return queryDatabase(connection).then((result) => {
          console.log(result);
          if (result.length === 0) {
            agent.add("keyword tidak ditemukan di database");
          }
          result.map((content) => {
            if (keywords === content.keyword) {
              agent.add(`${content.results}`);
            }
          });
          connection.end();
        });
      });
    }
    /** akhir function*/

    /** awal function*/
    function PenularanCovid(agent) {
      return connectToDatabase().then((connection) => {
        return queryDatabase(connection).then((result) => {
          console.log(result);
          if (result.length === 0) {
            agent.add("keyword tidak ditemukan di database");
          }
          result.map((content) => {
            if (keywords === content.keyword) {
              agent.add(`${content.results}`);
            }
          });
          connection.end();
        });
      });
    }
    /** akhir function*/

    /** awal function*/
    function IsolasiMandiri(agent) {
      return connectToDatabase().then((connection) => {
        return queryDatabase(connection).then((result) => {
          console.log(result);
          if (result.length === 0) {
            agent.add("keyword tidak ditemukan di database");
          }
          result.map((content) => {
            if (keywords === content.keyword) {
              agent.add(`${content.results}`);
            }
          });
          connection.end();
        });
      });
    }
    /** akhir function*/

    /** awal function*/
    function PerbedaanKarantinaMandiriDanLainnya(agent) {
      return connectToDatabase().then((connection) => {
        return queryDatabase(connection).then((result) => {
          console.log(result);
          if (result.length === 0) {
            agent.add("keyword tidak ditemukan di database");
          }
          result.map((content) => {
            if (keywords === content.keyword) {
              agent.add(`${content.results}`);
            }
          });
          connection.end();
        });
      });
    }
    /** akhir function*/

    /** awal function*/
    function KarantinaMandiri(agent) {
      return connectToDatabase().then((connection) => {
        return queryDatabase(connection).then((result) => {
          console.log(result);
          if (result.length === 0) {
            agent.add("keyword tidak ditemukan di database");
          }
          result.map((content) => {
            if (keywords === content.keyword) {
              agent.add(`${content.results}`);
            }
          });
          connection.end();
        });
      });
    }
    /** akhir function*/

    /** awal function*/
    function MenjagaJarak(agent) {
      return connectToDatabase().then((connection) => {
        return queryDatabase(connection).then((result) => {
          console.log(result);
          if (result.length === 0) {
            agent.add("keyword tidak ditemukan di database");
          }
          result.map((content) => {
            if (keywords === content.keyword) {
              agent.add(`${content.results}`);
            }
          });
          connection.end();
        });
      });
    }
    /** akhir function*/

    /** awal function*/
    function AnakRemajaTerinfeksi(agent) {
      return connectToDatabase().then((connection) => {
        return queryDatabase(connection).then((result) => {
          console.log(result);
          if (result.length === 0) {
            agent.add("keyword tidak ditemukan di database");
          }
          result.map((content) => {
            if (keywords === content.keyword) {
              agent.add(`${content.results}`);
            }
          });
          connection.end();
        });
      });
    }
    /** akhir function*/

    /** awal function*/
    function MelindungiDiri(agent) {
      return connectToDatabase().then((connection) => {
        return queryDatabase(connection).then((result) => {
          console.log(result);
          if (result.length === 0) {
            agent.add("keyword tidak ditemukan di database");
          }
          result.map((content) => {
            if (keywords === content.keyword) {
              agent.add(`${content.results}`);
            }
          });
          connection.end();
        });
      });
    }
    /** akhir function*/

    /** awal function*/
    function CaraMakaiMasker(agent) {
      return connectToDatabase().then((connection) => {
        return queryDatabase(connection).then((result) => {
          console.log(result);
          if (result.length === 0) {
            agent.add("keyword tidak ditemukan di database");
          }
          result.map((content) => {
            if (keywords === content.keyword) {
              agent.add(`${content.results}`);
            }
          });
          connection.end();
        });
      });
    }
    /** akhir function*/

    /** awal function*/
    function VirusDiPermukaanBenda(agent) {
      return connectToDatabase().then((connection) => {
        return queryDatabase(connection).then((result) => {
          console.log(result);
          if (result.length === 0) {
            agent.add("keyword tidak ditemukan di database");
          }
          result.map((content) => {
            if (keywords === content.keyword) {
              agent.add(`${content.results}`);
            }
          });
          connection.end();
        });
      });
    }
    /** akhir function*/

    /** awal function*/
    function BerbelanjaAman(agent) {
      return connectToDatabase().then((connection) => {
        return queryDatabase(connection).then((result) => {
          console.log(result);
          if (result.length === 0) {
            agent.add("keyword tidak ditemukan di database");
          }
          result.map((content) => {
            if (keywords === content.keyword) {
              agent.add(`${content.results}`);
            }
          });
          connection.end();
        });
      });
    }
    /** akhir function*/

    /** awal function*/
    function CuciBuahSayur(agent) {
      return connectToDatabase().then((connection) => {
        return queryDatabase(connection).then((result) => {
          console.log(result);
          if (result.length === 0) {
            agent.add("keyword tidak ditemukan di database");
          }
          result.map((content) => {
            if (keywords === content.keyword) {
              agent.add(`${content.results}`);
            }
          });
          connection.end();
        });
      });
    }
    /** akhir function*/

    /** awal function*/
    function Antibiotik(agent) {
      return connectToDatabase().then((connection) => {
        return queryDatabase(connection).then((result) => {
          console.log(result);
          if (result.length === 0) {
            agent.add("keyword tidak ditemukan di database");
          }
          result.map((content) => {
            if (keywords === content.keyword) {
              agent.add(`${content.results}`);
            }
          });
          connection.end();
        });
      });
    }
    /** akhir function*/

    /** awal function*/
    function MenularKotoran(agent) {
      return connectToDatabase().then((connection) => {
        return queryDatabase(connection).then((result) => {
          console.log(result);
          if (result.length === 0) {
            agent.add("keyword tidak ditemukan di database");
          }
          result.map((content) => {
            if (keywords === content.keyword) {
              agent.add(`${content.results}`);
            }
          });
          connection.end();
        });
      });
    }
    /** akhir function*/

    /** awal function*/
    function apakahVaksinObat(agent) {
      return connectToDatabase().then((connection) => {
        return queryDatabase(connection).then((result) => {
          console.log(result);
          if (result.length === 0) {
            agent.add("keyword tidak ditemukan di database");
          }
          result.map((content) => {
            if (keywords === content.keyword) {
              agent.add(`${content.results}`);
            }
          });
          connection.end();
        });
      });
    }
    /** akhir function*/

    /** awal function*/
    function caraKerjaVaksin(agent) {
      return connectToDatabase().then((connection) => {
        return queryDatabase(connection).then((result) => {
          console.log(result);
          if (result.length === 0) {
            agent.add("keyword tidak ditemukan di database");
          }
          result.map((content) => {
            if (keywords === content.keyword) {
              agent.add(`${content.results}`);
            }
          });
          connection.end();
        });
      });
    }
    /** akhir function*/

    /** awal function*/
    function biayaVaksin(agent) {
      return connectToDatabase().then((connection) => {
        return queryDatabase(connection).then((result) => {
          console.log(result);
          if (result.length === 0) {
            agent.add("keyword tidak ditemukan di database");
          }
          result.map((content) => {
            if (keywords === content.keyword) {
              agent.add(`${content.results}`);
            }
          });
          connection.end();
        });
      });
    }
    /** akhir function*/

    /** awal function*/
    function kandunganVaksin(agent) {
      return connectToDatabase().then((connection) => {
        return queryDatabase(connection).then((result) => {
          console.log(result);
          if (result.length === 0) {
            agent.add("keyword tidak ditemukan di database");
          }
          result.map((content) => {
            if (keywords === content.keyword) {
              agent.add(`${content.results}`);
            }
          });
          connection.end();
        });
      });
    }
    /** akhir function*/

    /** awal function*/
    function pengertianVaksinasi(agent) {
      return connectToDatabase().then((connection) => {
        return queryDatabase(connection).then((result) => {
          console.log(result);
          if (result.length === 0) {
            agent.add("keyword tidak ditemukan di database");
          }
          result.map((content) => {
            if (keywords === content.keyword) {
              agent.add(`${content.results}`);
            }
          });
          connection.end();
        });
      });
    }
    /** akhir function*/

    /** awal function*/
    function pengembanganVaksin(agent) {
      return connectToDatabase().then((connection) => {
        return queryDatabase(connection).then((result) => {
          console.log(result);
          if (result.length === 0) {
            agent.add("keyword tidak ditemukan di database");
          }
          result.map((content) => {
            if (keywords === content.keyword) {
              agent.add(`${content.results}`);
            }
          });
          connection.end();
        });
      });
    }
    /** akhir function*/

    /** awal function*/
    function vaksinHalal(agent) {
      return connectToDatabase().then((connection) => {
        return queryDatabase(connection).then((result) => {
          console.log(result);
          if (result.length === 0) {
            agent.add("keyword tidak ditemukan di database");
          }
          result.map((content) => {
            if (keywords === content.keyword) {
              agent.add(`${content.results}`);
            }
          });
          connection.end();
        });
      });
    }
    /** akhir function*/

    /** awal function*/
    function efekSampingVaksin(agent) {
      return connectToDatabase().then((connection) => {
        return queryDatabase(connection).then((result) => {
          console.log(result);
          if (result.length === 0) {
            agent.add("keyword tidak ditemukan di database");
          }
          result.map((content) => {
            if (keywords === content.keyword) {
              agent.add(`${content.results}`);
            }
          });
          connection.end();
        });
      });
    }
    /** akhir function*/

    /** awal function*/
    function caraMendapatkanVaksin(agent) {
      return connectToDatabase().then((connection) => {
        return queryDatabase(connection).then((result) => {
          console.log(result);
          if (result.length === 0) {
            agent.add("keyword tidak ditemukan di database");
          }
          result.map((content) => {
            if (keywords === content.keyword) {
              agent.add(`${content.results}`);
            }
          });
          connection.end();
        });
      });
    }
    /** akhir function*/

    /** awal function*/
    function jenisVaksin(agent) {
      return connectToDatabase().then((connection) => {
        return queryDatabase(connection).then((result) => {
          console.log(result);
          if (result.length === 0) {
            agent.add("keyword tidak ditemukan di database");
          }
          result.map((content) => {
            if (keywords === content.keyword) {
              agent.add(`${content.results}`);
            }
          });
          connection.end();
        });
      });
    }
    /** akhir function*/

    /** awal function*/
    function caraMencuciTangan(agent) {
      return connectToDatabase().then((connection) => {
        return queryDatabase(connection).then((result) => {
          console.log(result);
          if (result.length === 0) {
            agent.add("keyword tidak ditemukan di database");
          }
          result.map((content) => {
            if (keywords === content.keyword) {
              agent.add(`${content.results}`);
            }
          });
          connection.end();
        });
      });
    }
    /** akhir function*/

    /** awal function*/
    function pengertianVirusCorona(agent) {
      return connectToDatabase().then((connection) => {
        return queryDatabase(connection).then((result) => {
          console.log(result);
          if (result.length === 0) {
            agent.add("keyword tidak ditemukan di database");
          }
          result.map((content) => {
            if (keywords === content.keyword) {
              agent.add(`${content.results}`);
            }
          });
          connection.end();
        });
      });
    }
    /** akhir function*/

    // // Uncomment and edit to make your own intent handler
    // // uncomment `intentMap.set('your intent name here', yourFunctionHandler);`
    // // below to get this function to be run when a Dialogflow intent is matched
    // function yourFunctionHandler(agent) {
    //   agent.add(`This message is from Dialogflow's Cloud Functions for Firebase editor!`);
    //   agent.add(new Card({
    //       title: `Title: this is a card title`,
    //       imageUrl: 'https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png',
    //       text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
    //       buttonText: 'This is a button',
    //       buttonUrl: 'https://assistant.google.com/'
    //     })
    //   );
    //   agent.add(new Suggestion(`Quick Reply`));
    //   agent.add(new Suggestion(`Suggestion`));
    //   agent.setContext({ name: 'weather', lifespan: 2, parameters: { city: 'Rome' }});
    // }

    // // Uncomment and edit to make your own Google Assistant intent handler
    // // uncomment `intentMap.set('your intent name here', googleAssistantHandler);`
    // // below to get this function to be run when a Dialogflow intent is matched
    // function googleAssistantHandler(agent) {
    //   let conv = agent.conv(); // Get Actions on Google library conv instance
    //   conv.ask('Hello from the Actions on Google client library!') // Use Actions on Google library
    //   agent.add(conv); // Add Actions on Google library responses to your agent's response
    // }
    // // See https://github.com/dialogflow/fulfillment-actions-library-nodejs
    // // for a complete Dialogflow fulfillment library Actions on Google client library v2 integration sample

    // Run the proper function handler based on the matched Dialogflow intent name
    let intentMap = new Map();
    intentMap.set("Default Welcome Intent", welcome);
    intentMap.set("Default Fallback Intent", fallback);
    intentMap.set("getDataFromMySQL", handleReadFromMySQL);
    intentMap.set("PengertianCovid", PengertianCovid);
    intentMap.set("InfoCovidToday", InfoCovidToday);
    intentMap.set("ListKeywordBot", ListKeywordBot);
    intentMap.set("GejalaCovid", GejalaCovid);
    intentMap.set("PenularanCovid", PenularanCovid);
    intentMap.set("IsolasiMandiri", IsolasiMandiri);
    intentMap.set(
      "PerbedaanKarantinaMandiriDanLainnya",
      PerbedaanKarantinaMandiriDanLainnya
    );
    intentMap.set("KarantinaMandiri", KarantinaMandiri);
    intentMap.set("MenjagaJarak", MenjagaJarak);
    intentMap.set("AnakRemajaTerinfeksi", AnakRemajaTerinfeksi);
    intentMap.set("MelindungiDiri", MelindungiDiri);
    intentMap.set("CaraMakaiMasker", CaraMakaiMasker);
    intentMap.set("VirusDiPermukaanBenda", VirusDiPermukaanBenda);
    intentMap.set("BerbelanjaAman", BerbelanjaAman);
    intentMap.set("CuciBuahSayur", CuciBuahSayur);
    intentMap.set("Antibiotik", Antibiotik);
    intentMap.set("MenularKotoran", MenularKotoran);
    intentMap.set("apakahVaksinObat", apakahVaksinObat);
    intentMap.set("caraKerjaVaksin", caraKerjaVaksin);
    intentMap.set("biayaVaksin", biayaVaksin);
    intentMap.set("kandunganVaksin", kandunganVaksin);
    intentMap.set("pengertianVaksinasi", pengertianVaksinasi);
    intentMap.set("pengembanganVaksin", pengembanganVaksin);
    intentMap.set("vaksinHalal", vaksinHalal);
    intentMap.set("efekSampingVaksin", efekSampingVaksin);
    intentMap.set("caraMendapatkanVaksin", caraMendapatkanVaksin);
    intentMap.set("jenisVaksin", jenisVaksin);
    intentMap.set("caraMencuciTangan", caraMencuciTangan);
    intentMap.set("pengertianVirusCorona", pengertianVirusCorona);

    // intentMap.set('your intent name here', yourFunctionHandler);
    // intentMap.set('your intent name here', googleAssistantHandler);
    agent.handleRequest(intentMap);
  }
);
