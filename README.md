# Kinde Starter Kit - SvelteKit

The Kinde Starter Kit for SvelteKit SDK.

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com) [![Kinde Docs](https://img.shields.io/badge/Kinde-Docs-eee?style=flat-square)](https://kinde.com/docs/developer-tools) [![Kinde Community](https://img.shields.io/badge/Kinde-Community-eee?style=flat-square)](https://thekindecommunity.slack.com)

## Register an account on Kinde

To get started set up an account on [Kinde](https://app.kinde.com/register).

## Development

### Initial set up

1. Clone the repository to your machine:

   ```bash
   git clone https://github.com/kinde-starter-kits/kinde-sveltekit-starter-kit
   ```

2. Go into the project:

   ```bash
   cd kinde-sveltekit-starter-kit
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Setup your local environment

Create `.env` file. Set the following variables with the details from the Kinde App Keys page

```bash
KINDE_AUDIENCE=https://your_kinde_domain.kinde.com/api
KINDE_CLIENT_ID=your_kinde_client_id
KINDE_CLIENT_SECRET=your_kinde_client_secret
KINDE_ISSUER_URL=https://your_kinde_domain.kinde.com
KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:5173
KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:5173
KINDE_REDIRECT_URL=http://localhost:5173/api/auth/kinde_callback
KINDE_SCOPE=profile email offline openid
```

For example

```bash
KINDE_AUDIENCE=https://abc.kinde.com/api
KINDE_CLIENT_ID=ecc919dbf2c24e19ac251c1acb69107d
KINDE_CLIENT_SECRET=AAJXHXZ3HanVRzvO9G1cO9lsx3UvvNACKT47fMNP4j7O8yKJqWse
KINDE_ISSUER_URL=https://abc.kinde.com
KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:5173
KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:5173
KINDE_REDIRECT_URL=http://localhost:5173/api/auth/kinde_callback
KINDE_SCOPE=profile email offline openid
```

Implement your modifications and then execute the below command to compile the SDK:

```bash
npm run build
```

### Set your Callback and Logout URLs

Your user will be redirected to Kinde to authenticate. After they have logged in or registered they will be redirected back to your NextJS application.

You need to specify in Kinde which url you would like your user to be redirected to in order to authenticate your app.

On the App Keys page set `Allowed callback URLs` to http://localhost:5173/api/auth/kinde_callback

> Important! This is required for your users to successfully log in to your app.

You will also need to set the url they will be redirected to upon logout. Set the `Allowed logout redirect URLs` to http://localhost:5173.

### Start the app

Run `npm run dev` and navigate to http://localhost:5173.

Click on `Sign up` and register your first user for your business!

## View users in Kinde

If you navigate to the "Users" page within Kinde you will see your newly registered user there. 🚀

## Contributing

Please refer to Kinde’s [contributing guidelines](https://github.com/kinde-oss/.github/blob/489e2ca9c3307c2b2e098a885e22f2239116394a/CONTRIBUTING.md).

## License

By contributing to Kinde, you agree that your contributions will be licensed under its MIT License.
