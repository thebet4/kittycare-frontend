# Setup Instructions

## 1. Ensure Backend is Running

Make sure that your backend is up and running before proceeding.

## 2. Configure Google Cloud Platform (GCP)

Log in to your Google Cloud Platform (GCP) account and navigate to the API & Services section. Configure the necessary API to accept requests from your local development environment by setting up the appropriate credentials, OAuth consent screen, and allowed redirect URIs.

## 3. Set Environment Variables

In the `.env` file, set the following variables:

```ini
VITE_BASE_API_URL=<your-api-url>
VITE_GOOGLE_CLIENT_ID=<your-gcp-client-id>
```

Replace `<your-api-url>` with your actual API URL and `<your-gcp-client-id>` with the client ID you configured on GCP.

## 4. Start the Frontend Application

Run the frontend application using the appropriate command, such as:

```sh
yarn dev
# or
npm run dev
```

Your frontend should now be connected to your backend and GCP API properly.
