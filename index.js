const TelegramBot = require("node-telegram-bot-api");

require("dotenv").config();

const TOKEN = process.env.TOKEN;

const bot = new TelegramBot(TOKEN, { polling: true });

const exampleImages = {
  "1 - misol": "https://t.me/matematika_5_1qism/313",
  "2 - misol": "https://t.me/matematika_5_1qism/313",
  "3 - misol": [
    "https://t.me/matematika_5_1qism/314",
    "https://t.me/matematika_5_1qism/315",
    "https://t.me/matematika_5_1qism/316",
  ],
  "4 - misol": "https://t.me/matematika_5_1qism/317",
  "5 - misol": "https://t.me/matematika_5_1qism/317",
  "6 - misol": "https://t.me/matematika_5_1qism/318",
  "7 - misol": "https://t.me/matematika_5_1qism/318",
  "8 - misol": "https://t.me/matematika_5_1qism/318",
  "9 - misol": "https://t.me/matematika_5_1qism/319",
  "10 - misol": "https://t.me/matematika_5_1qism/320",
  "11 - misol": [
    "https://t.me/matematika_5_1qism/321",
    "https://t.me/matematika_5_1qism/322",
  ],
  "12 - misol": "https://t.me/matematika_5_1qism/323",
  "13 - misol": "https://t.me/matematika_5_1qism/323",
  "14 - misol": "https://t.me/matematika_5_1qism/324",
  "15 - misol": "https://t.me/matematika_5_1qism/324",
  "16 - misol": "https://t.me/matematika_5_1qism/325",
  "17 - misol": "https://t.me/matematika_5_1qism/326",
  "18 - misol": "https://t.me/matematika_5_1qism/327",
  "19 - misol": "https://t.me/matematika_5_1qism/327",
  "20 - misol": "https://t.me/matematika_5_1qism/332",
  "22 - misol": "https://t.me/matematika_5_1qism/334",
  "23 - misol": "https://t.me/matematika_5_1qism/334",
  "24 - misol": "https://t.me/matematika_5_1qism/335",
  "25 - misol": "https://t.me/matematika_5_1qism/335",
  "26 - misol": "https://t.me/matematika_5_1qism/336",
  "27 - misol": "https://t.me/matematika_5_1qism/338",
  "28 - misol": "https://t.me/matematika_5_1qism/338",
  "29 - misol": "https://t.me/matematika_5_1qism/338",
  "30 - misol": "https://t.me/matematika_5_1qism/339",
  "31 - misol": "https://t.me/matematika_5_1qism/339",
  "32 - misol": "https://t.me/matematika_5_1qism/339",
  "33 - misol": "https://t.me/matematika_5_1qism/339",
  "34 - misol": "https://t.me/matematika_5_1qism/340",
  "35 - misol": "https://t.me/matematika_5_1qism/340",
  "36 - misol": "https://t.me/matematika_5_1qism/340",
  "37 - misol": "https://t.me/matematika_5_1qism/340",
  "38 - misol": "https://t.me/matematika_5_1qism/340",
  "39 - misol": "https://t.me/matematika_5_1qism/340",
  "40 - misol": "https://t.me/matematika_5_1qism/341",
  "41 - misol": "https://t.me/matematika_5_1qism/341",
  "42 - misol": "https://t.me/matematika_5_1qism/342",
  "43 - misol": "https://t.me/matematika_5_1qism/342",
  "44 - misol": "https://t.me/matematika_5_1qism/342",
  "45 - misol": "https://t.me/matematika_5_1qism/346",
  "46 - misol": "https://t.me/matematika_5_1qism/346",
  "47 - misol": "https://t.me/matematika_5_1qism/346",
  "48 - misol": "https://t.me/matematika_5_1qism/346",
  "49 - misol": "https://t.me/matematika_5_1qism/346",
  "50 - misol": "https://t.me/matematika_5_1qism/346",
  "51 - misol": "https://t.me/matematika_5_1qism/347",
  "52 - misol": "https://t.me/matematika_5_1qism/347",
  "53 - misol": "https://t.me/matematika_5_1qism/347",
  "54 - misol": "https://t.me/matematika_5_1qism/347",
  "55 - misol": "https://t.me/matematika_5_1qism/347",
  "56 - misol": "https://t.me/matematika_5_1qism/347",
  "57 - misol": "https://t.me/matematika_5_1qism/348",
  "58 - misol": "https://t.me/matematika_5_1qism/348",
  "59 - misol": "https://t.me/matematika_5_1qism/348",
  "60 - misol": "https://t.me/matematika_5_1qism/348",
  "61 - misol": "https://t.me/matematika_5_1qism/349",
  "62 - misol": "https://t.me/matematika_5_1qism/349",
  "63 - misol": "https://t.me/matematika_5_1qism/349",
  "64 - misol": "https://t.me/matematika_5_1qism/349",
  "65 - misol": "https://t.me/matematika_5_1qism/349",
  "66 - misol": "https://t.me/matematika_5_1qism/349",
  "67 - misol": "https://t.me/matematika_5_1qism/350",
  "68 - misol": "https://t.me/matematika_5_1qism/350",
  "69 - misol": "https://t.me/matematika_5_1qism/350",
  "70 - misol": "https://t.me/matematika_5_1qism/350",
  "71 - misol": "https://t.me/matematika_5_1qism/351",
  "72 - misol": "https://t.me/matematika_5_1qism/351",
  "73 - misol": "https://t.me/matematika_5_1qism/351",
  "74 - misol": "https://t.me/matematika_5_1qism/351",
  "75 - misol": "https://t.me/matematika_5_1qism/354",
  "76 - misol": "https://t.me/matematika_5_1qism/354",
  "77 - misol": "https://t.me/matematika_5_1qism/354",
  "78 - misol": "https://t.me/matematika_5_1qism/355",
  "79 - misol": "https://t.me/matematika_5_1qism/354",
  "80 - misol": "https://t.me/matematika_5_1qism/354",
  "81 - misol": "https://t.me/matematika_5_1qism/355",
  "82 - misol": "https://t.me/matematika_5_1qism/356",
  "83 - misol": "https://t.me/matematika_5_1qism/356",
  "84 - misol": "https://t.me/matematika_5_1qism/356",
  "85 - misol": "https://t.me/matematika_5_1qism/356",
  "86 - misol": "https://t.me/matematika_5_1qism/356",
  "87 - misol": "https://t.me/matematika_5_1qism/356",
  "88 - misol": "https://t.me/matematika_5_1qism/357",
  "89 - misol": "https://t.me/matematika_5_1qism/357",
  "90 - misol": "https://t.me/matematika_5_1qism/357",
  "91 - misol": "https://t.me/matematika_5_1qism/357",
  "92 - misol": "https://t.me/matematika_5_1qism/357",
  "93 - misol": "https://t.me/matematika_5_1qism/357",
  "94 - misol": "https://t.me/matematika_5_1qism/357",
  "95 - misol": "https://t.me/matematika_5_1qism/357",
  "96 - misol": "https://t.me/matematika_5_1qism/357",
  "97 - misol": "https://t.me/matematika_5_1qism/357",
  "98 - misol": "https://t.me/matematika_5_1qism/358",
  "99 - misol": "https://t.me/matematika_5_1qism/358",
  "100 - misol": "https://t.me/matematika_5_1qism/358",
  "101 - misol": "https://t.me/matematika_5_1qism/358",
  "102 - misol": "https://t.me/matematika_5_1qism/359",
  "103 - misol": "https://t.me/matematika_5_1qism/359",
  "104 - misol": "https://t.me/matematika_5_1qism/359",
  "105 - misol": "https://t.me/matematika_5_1qism/359",
  "106 - misol": "https://t.me/matematika_5_1qism/359",
  "107 - misol": "https://t.me/matematika_5_1qism/359",
  "108 - misol": "https://t.me/matematika_5_1qism/360",
  "109 - misol": "https://t.me/matematika_5_1qism/360",
  "110 - misol": "https://t.me/matematika_5_1qism/360",
  "111 - misol": "https://t.me/matematika_5_1qism/360",
  "112 - misol": "https://t.me/matematika_5_1qism/360",
  "113 - misol": "https://t.me/matematika_5_1qism/360",
  "114 - misol": "https://t.me/matematika_5_1qism/360",
  "115 - misol": "https://t.me/matematika_5_1qism/360",
  "116 - misol": "https://t.me/matematika_5_1qism/361",
  "117 - misol": "https://t.me/matematika_5_1qism/361",
  "118 - misol": "https://t.me/matematika_5_1qism/362",
  "119 - misol": "https://t.me/matematika_5_1qism/362",
  "120 - misol": "https://t.me/matematika_5_1qism/362",
  "121 - misol": "https://t.me/matematika_5_1qism/362",
  "122 - misol": "https://t.me/matematika_5_1qism/362",
  "123 - misol": "https://t.me/matematika_5_1qism/362",
};

const userSubscriptions = {};

const setupCommands = async () => {
  try {
    await bot.setMyCommands([
      { command: "/start", description: "Botni ishga tushurish" },
      { command: "/info", description: "Bot haqida ma'lumot" },
      { command: "/setup", description: "Admin bilan bog'lanish ✔" },
      { command: "/video", description: "Bot xaqida video ✅" },
    ]);
  } catch (error) {
    console.error("Komandalarni o'rnatishda xatolik yuz berdi:", error);
  }
};

const handleStartCommand = async (chatId) => {
  await bot.sendMessage(
    chatId,
    `Salom! Botdan foydalanish uchun quyidagi kanallarga obuna bo'lishingiz kerak:\n\n1. @matematika_5_1qism\n2. @matematika_5_2qism\n3. @matematika_5_1qismm\n4. @matematika_5_2qismm\n5. @animelar_dunyosi_01\n\nObuna bo'lgandan so'ng, /check komandasini yuboring.\n\nAgar bu botni ishlatishni bilmasangiz /video ni bosing`
  );
};

const handleInfoCommand = async (chatId, firstName) => {
  await bot.sendMessage(
    chatId,
    `Salom ${firstName}, Bu bot Matematika 5 - sinf 1 - qismning javoblarini sizga tashlaydi`
  );
};

const handleSetupCommand = async (chatId, firstName) => {
  await bot.sendMessage(
    chatId,
    `Hurmatli ${firstName}, Bizning Admin @aquahoshinauz. Qanday savolingiz bo'lsa bemalol yozing sizga albatta javob beradi✅`
  );
};
const handleVideoCommand = async (chatId) => {
  const videoUrl = "https://t.me/bajkchakscvakhcv/3";
  await bot.sendVideo(chatId, videoUrl);
};

const checkSubscription = async (chatId) => {
  const channels = [
    "@matematika_5_1qism",
    "@matematika_5_2qism",
    "@matematika_5_1qismm",
    "@matematika_5_2qismm",
    "@animelar_dunyosi_01",
  ];
  for (const channel of channels) {
    try {
      const member = await bot.getChatMember(channel, chatId);
      console.log(
        `Kanal: ${channel} - Foydalanuvchi statusi: ${member.status}`
      );
      if (!["member", "administrator", "creator"].includes(member.status)) {
        return false;
      }
    } catch (error) {
      console.error(`Kanal ${channel} tekshirishda xatolik yuz berdi:`, error);
      return false;
    }
  }
  return true;
};
const handleExampleCommand = async (chatId, exampleName) => {
  if (await checkSubscription(chatId)) {
    const imageUrls = exampleImages[exampleName.trim()];
    if (imageUrls) {
      if (Array.isArray(imageUrls)) {
        for (const url of imageUrls) {
          await bot.sendPhoto(chatId, url);
        }
      } else {
        await bot.sendPhoto(chatId, imageUrls);
      }
    } else {
      await bot.sendMessage(chatId, "Uzur ammo bu misol botga kiritilmagan.\nSavolingiz bo'lsa @aquahoshinauz ga murojat qiling ✔");
    }
  } else {
    await bot.sendMessage(
      chatId,
      "Kanallarga obuna bo'ling va yana urinib ko'ring."
    );
  }
};

const handleCheckCommand = async (chatId) => {
  if (await checkSubscription(chatId)) {
    userSubscriptions[chatId] = { subscribed: true };
    await bot.sendMessage(
      chatId,
      "Siz barcha talab qilingan kanallarga obuna bo'ldingiz. Endi misolni raqamini yuborishingiz mumkin. Botdan foydalanishni bilmasangiz /video bo'limini bosing"
    );
  } else {
    await bot.sendMessage(
      chatId,
      "Siz barcha talab qilingan kanallarga obuna bo'lmadingiz. Iltimos, obuna bo'ling va yana urinib ko'ring."
    );
  }
};
const handleUnknownCommand = async (chatId) => {
  await bot.sendMessage(chatId, "Bunday narsa botga kiritilmagan ❌");
};

const bootstrap = () => {
  setupCommands();

  bot.on("message", async (msg) => {
    console.log(msg);
    const { text, chat, from } = msg;
    const chatId = chat.id;

    if (!text) {
      return;
    }

    switch (text) {
      case "/start":
        await handleStartCommand(chatId);
        break;
      case "/info":
        await handleInfoCommand(chatId, from.first_name);
        break;
      case "/setup":
        await handleSetupCommand(chatId, from.first_name);
        break;
      case "/check":
        await handleCheckCommand(chatId);
        break;
      case "/video":
        await handleVideoCommand(chatId);
        break;
      case "1 - misol":
      case "2 - misol":
      case "3 - misol":
      case "4 - misol":
      case "5 - misol":
      case "6 - misol":
      case "7 - misol":
      case "8 - misol":
      case "9 - misol":
      case "10 - misol":
      case "11 - misol":
      case "12 - misol":
      case "13 - misol":
      case "14 - misol":
      case "15 - misol":
      case "16 - misol":
      case "17 - misol":
      case "18 - misol":
      case "19 - misol":
      case "20 - misol":
      case "21 - misol":
      case "22 - misol":
      case "23 - misol":
      case "24 - misol":
      case "25 - misol":
      case "26 - misol":
      case "27 - misol":
      case "28 - misol":
      case "29 - misol":
      case "30 - misol":
      case "31 - misol":
      case "32 - misol":
      case "33 - misol":
      case "34 - misol":
      case "35 - misol":
      case "36 - misol":
      case "37 - misol":
      case "38 - misol":
      case "39 - misol":
      case "40 - misol":
      case "41 - misol":
      case "42 - misol":
      case "43 - misol":
      case "44 - misol":
      case "45 - misol":
      case "46 - misol":
      case "47 - misol":
      case "48 - misol":
      case "49 - misol":
      case "50 - misol":
      case "51 - misol":
      case "52 - misol":
      case "53 - misol":
      case "54 - misol":
      case "55 - misol":
      case "56 - misol":
      case "57 - misol":
      case "58 - misol":
      case "59 - misol":
      case "60 - misol":
      case "61 - misol":
      case "62 - misol":
      case "63 - misol":
      case "64 - misol":
      case "65 - misol":
      case "66 - misol":
      case "67 - misol":
      case "68 - misol":
      case "69 - misol":
      case "70 - misol":
      case "71 - misol":
      case "72 - misol":
      case "73 - misol":
      case "74 - misol":
      case "75 - misol":
      case "76 - misol":
      case "77 - misol":
      case "78 - misol":
      case "79 - misol":
      case "80 - misol":
      case "81 - misol":
      case "82 - misol":
      case "83 - misol":
      case "84 - misol":
      case "85 - misol":
      case "86 - misol":
      case "87 - misol":
      case "88 - misol":
      case "89 - misol":
      case "90 - misol":
      case "91 - misol":
      case "92 - misol":
      case "93 - misol":
      case "94 - misol":
      case "95 - misol":
      case "96 - misol":
      case "97 - misol":
      case "98 - misol":
      case "99 - misol":
      case "100 - misol":
      case "101 - misol":
      case "102 - misol":
      case "103 - misol":
      case "104 - misol":
      case "105 - misol":
      case "106 - misol":
      case "107 - misol":
      case "108 - misol":
      case "109 - misol":
      case "110 - misol":
      case "111 - misol":
      case "112 - misol":
      case "113 - misol":
      case "114 - misol":
      case "115 - misol":
      case "116 - misol":
      case "117 - misol":
      case "118 - misol":
      case "119 - misol":
      case "120 - misol":
      case "121 - misol":
      case "122 - misol":
      case "123 - misol":
      case "124 - misol":
      case "125 - misol":
      case "126 - misol":
      case "127 - misol":
      case "128 - misol":
      case "129 - misol":
      case "130 - misol":
      case "131 - misol":
      case "132 - misol":
      case "133 - misol":
      case "134 - misol":
      case "135 - misol":
      case "136 - misol":
      case "137 - misol":
      case "138 - misol":
      case "139 - misol":
      case "140 - misol":
      case "141 - misol":
      case "142 - misol":
      case "143 - misol":
      case "144 - misol":
      case "145 - misol":
      case "146 - misol":
      case "147 - misol":
      case "148 - misol":
      case "149 - misol":
      case "150 - misol":
      case "151 - misol":
      case "152 - misol":
      case "153 - misol":
      case "154 - misol":
      case "155 - misol":
      case "156 - misol":
      case "157 - misol":
      case "158 - misol":
      case "159 - misol":
      case "160 - misol":
      case "161 - misol":
      case "162 - misol":
      case "163 - misol":
      case "164 - misol":
      case "165 - misol":
      case "166 - misol":
      case "167 - misol":
      case "168 - misol":
      case "169 - misol":
      case "170 - misol":
      case "171 - misol":
      case "172 - misol":
      case "173 - misol":
      case "174 - misol":
      case "175 - misol":
      case "176 - misol":
      case "177 - misol":
      case "178 - misol":
      case "179 - misol":
      case "180 - misol":
      case "181 - misol":
      case "182 - misol":
      case "183 - misol":
      case "184 - misol":
      case "185 - misol":
      case "186 - misol":
      case "187 - misol":
      case "188 - misol":
      case "189 - misol":
      case "190 - misol":
      case "191 - misol":
      case "192 - misol":
      case "193 - misol":
      case "194 - misol":
      case "195 - misol":
      case "196 - misol":
      case "197 - misol":
      case "198 - misol":
      case "199 - misol":
      case "200 - misol":
        await handleExampleCommand(chatId, text);
        break;
      default:
        await handleUnknownCommand(chatId);
        break;
    }
  });
};
bootstrap();