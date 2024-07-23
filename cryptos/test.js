async function getNonceAndSendRequest() {
  const url = 'https://api-gw-tg.memefi.club/graphql';
  const headers = {
      "Host": "api-gw-tg.memefi.club",
      "content-length": "970",
      "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Android WebView\";v=\"126\"",
      "accept": "*/*",
      "content-type": "application/json",
      "sec-ch-ua-mobile": "?1",
      "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY2NTRhOTJjOWU3MTVmNDNjZjExZDk5YyIsInVzZXJuYW1lIjoiVGFsaGFSaWF6In0sInNlc3Npb25JZCI6IjY2OWQ0YjE0ZDUzODJkZjI5ODkwZjZmZCIsInN1YiI6IjY2NTRhOTJjOWU3MTVmNDNjZjExZDk5YyIsImlhdCI6MTcyMTU4NDQwNCwiZXhwIjoxNzI5MzYwNDA0fQ.Ht-03mebKtR7a3-Hl1uRjMpc_t4XE5Hp8IndvhX-NkA",
      "user-agent": "Mozilla/5.0 (Linux; Android 10; TECNO LD7 Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/126.0.6478.134 Mobile Safari/537.36",
      "sec-ch-ua-platform": "\"Android\"",
      "origin": "https://tg-app.memefi.club",
      "x-requested-with": "org.telegram.messenger",
      "sec-fetch-site": "same-site",
      "sec-fetch-mode": "cors",
      "sec-fetch-dest": "empty",
      "referer": "https://tg-app.memefi.club/",
      "accept-encoding": "gzip, deflate, br, zstd",
      "accept-language": "en,en-US;q=0.9",
      "priority": "u=1, i"
  };

  const firstPayload = [{
      "operationName": "QUERY_GAME_CONFIG",
      "variables": {},
      "query": "query QUERY_GAME_CONFIG {\n  telegramGameGetConfig {\n    ...FragmentBossFightConfig\n    __typename\n  }\n}\n\nfragment FragmentBossFightConfig on TelegramGameConfigOutput {\n  _id\n  coinsAmount\n  currentEnergy\n  maxEnergy\n  weaponLevel\n  zonesCount\n  tapsReward\n  energyLimitLevel\n  energyRechargeLevel\n  tapBotLevel\n  currentBoss {\n    _id\n    level\n    currentHealth\n    maxHealth\n    __typename\n  }\n  freeBoosts {\n    _id\n    currentTurboAmount\n    maxTurboAmount\n    turboLastActivatedAt\n    turboAmountLastRechargeDate\n    currentRefillEnergyAmount\n    maxRefillEnergyAmount\n    refillEnergyLastActivatedAt\n    refillEnergyAmountLastRechargeDate\n    __typename\n  }\n  bonusLeaderDamageEndAt\n  bonusLeaderDamageStartAt\n  bonusLeaderDamageMultiplier\n  nonce\n  spinEnergyNonRefillable\n  spinEnergyRefillable\n  spinEnergyTotal\n  spinEnergyStaticLimit\n  __typename\n}"
  }];

  try {
      const response = await fetch(url, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(firstPayload)
      });
      const data = await response.json();
      const nonce = data.data.telegramGameGetConfig.nonce;

      const secondPayload = [{
          "operationName": "MutationGameProcessTapsBatch",
          "variables": {
              "payload": {
                  "nonce": nonce,
                  "tapsCount": 8,
                  "vector": "3,3,3,3,3,3,3,3"
              }
          },
          "query": "mutation MutationGameProcessTapsBatch($payload: TelegramGameTapsBatchInput!) {\n  telegramGameProcessTapsBatch(payload: $payload) {\n    ...FragmentBossFightConfig\n    __typename\n  }\n}\n\nfragment FragmentBossFightConfig on TelegramGameConfigOutput {\n  _id\n  coinsAmount\n  currentEnergy\n  maxEnergy\n  weaponLevel\n  zonesCount\n  tapsReward\n  energyLimitLevel\n  energyRechargeLevel\n  tapBotLevel\n  currentBoss {\n    _id\n    level\n    currentHealth\n    maxHealth\n    __typename\n  }\n  freeBoosts {\n    _id\n    currentTurboAmount\n    maxTurboAmount\n    turboLastActivatedAt\n    turboAmountLastRechargeDate\n    currentRefillEnergyAmount\n    maxRefillEnergyAmount\n    refillEnergyLastActivatedAt\n    refillEnergyAmountLastRechargeDate\n    __typename\n  }\n  bonusLeaderDamageEndAt\n  bonusLeaderDamageStartAt\n  bonusLeaderDamageMultiplier\n  nonce\n  spinEnergyNonRefillable\n  spinEnergyRefillable\n  spinEnergyTotal\n  spinEnergyStaticLimit\n  __typename\n}"
      }];

      const secondResponse = await fetch(url, {
          method: 'POST',
          headers: {
              ...headers,
              "content-length": "1187"
          },
          body: JSON.stringify(secondPayload)
      });
      const secondData = await secondResponse.json();
      console.log(secondData);
  } catch (error) {
      console.error('Error:', error);
  }
}

getNonceAndSendRequest();
