
## 👋🏻 Introducing Better Legal Land assistant

<p align="center">
    <a href="https://bettergpt.chat" target="_blank">
        <img src="assets/preview.png" alt="landing" width=500 />
    </a>
</p>

#Features

Better ChatGPT comes with a bundle of amazing features! Here are some of them:

- Proxy to bypass ChatGPT regional restrictions
- Prompt library
- Organize chats into folders (with colours)
- Filter chats and folders
- Token count and pricing
- ShareGPT integration
- Custom model parameters (e.g. presence_penalty)
- Chat as user / assistant / system
- Edit, reorder and insert any messages, anywhere
- Chat title generator
- Save chat automatically to local storage
- Import / Export chat
- Download chat (markdown / image / json)
- Sync to Google Drive
- Azure OpenAI endpoint support
- Multiple language support (i18n)

1. Enter into the API menu your OpenAI API Key obtained from [OpenAI API Keys](https://platform.openai.com/account/api-keys).
2. Utilise the api endpoint proxy provided by [ayaka14732/ChatGPTAPIFree](https://github.com/ayaka14732/ChatGPTAPIFree) (if you are in a region with no access to ChatGPT)
3. Host your own API endpoint by following the instructions provided here: <https://github.com/ayaka14732/ChatGPTAPIFree>. Subsequently, enter the API endpoint into the API menu.


## Do you also want to deploy with Vercel

[![Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fztjhz%2FBetterChatGPT)

## GitHub Pages

### Steps

1. Create a GitHub account (if you don't have one already)
1. Star this [repository](https://github.com/ztjhz/BetterChatGPT) ⭐️
1. Fork this [repository](https://github.com/ztjhz/BetterChatGPT)
1. In your forked repository, navigate to the `Settings` tab
   ![image](https://user-images.githubusercontent.com/59118459/223753577-9b6f8266-26e8-471b-8f45-a1a02fbab232.png)
1. In the left sidebar, click on `Pages` and in the right section, select `GitHub Actions` for `source`.
   ![image](https://user-images.githubusercontent.com/59118459/227568881-d8fb7baa-f890-4dee-8fc2-b6b429ba2098.png)
1. Now, click on `Actions`
   ![image](https://user-images.githubusercontent.com/59118459/223751928-cf2b91b9-4663-4a36-97de-5eb751b32c7e.png)
1. In the left sidebar, click on `Deploy to GitHub Pages`
   ![image](https://user-images.githubusercontent.com/59118459/223752459-183ec23f-72f5-436e-a088-e3386492b8cb.png)
1. Above the list of workflow runs, select `Run workflow`.
   ![image](https://user-images.githubusercontent.com/59118459/223753340-1270e038-d213-4d6f-938c-66a30dad7c88.png)
1. Navigate back to the `Settings` tab
   ![image](https://user-images.githubusercontent.com/59118459/223753577-9b6f8266-26e8-471b-8f45-a1a02fbab232.png)
1. In the left sidebar, click on `Pages` and in the right section. Then at the top section, you can see that "Your site is live at `XXX`".
   ![image](https://user-images.githubusercontent.com/59118459/227568881-d8fb7baa-f890-4dee-8fc2-b6b429ba2098.png)

### Running it locally

1. Ensure that you have the following installed:

   - [node.js](https://nodejs.org/en/) (v14.18.0 or above)
   - [yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/) (6.14.15 or above)

2. Clone this [repository](https://github.com/ztjhz/BetterChatGPT) by running `git clone https://github.com/ztjhz/BetterChatGPT.git`
3. Navigate into the directory by running `cd BetterChatGPT`
4. Run `yarn` or `npm install`, depending on whether you have yarn or npm installed.
5. Launch the app by running `yarn dev` or `npm run dev`

### Running it locally using docker compose
1. Ensure that you have the following installed:

   - [docker](https://www.docker.com/) (v24.0.7 or above)
      ```bash
      curl https://get.docker.com | sh \
      && sudo usermod -aG docker $USER
      ```

2. Build the docker image
   ```
   docker compose build
   ```

3. Build and start the container using docker compose
   ```
   docker compose build
   docker compose up -d
   ```

4. Stop the container
   ```
   docker compose down
   ```
