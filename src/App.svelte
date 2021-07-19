<script lang="ts">
  import axios, { Method, AxiosError } from 'axios';
  import Response from './components/Response/Response.svelte';
  import Request from './components/Request/Request.svelte';
  import {
    params,
    headers,
    response,
    responseHeaders,
    time,
    size,
    status,
    editor,
  } from './lib/store';
  import { onMount } from 'svelte';
  import type { CustomAxiosRequest } from './types';

  onMount(() => {
    axios.interceptors.request.use(
      (config: CustomAxiosRequest) => {
        config.customData = config.customData || {};
        config.customData.time = new Date().getTime();
        return config;
      },
      (e) => Promise.reject(e)
    );

    axios.interceptors.response.use(
      (response) => {
        $time = new Date().getTime() - (response.config as any).customData.time;
        return response;
      },
      (e) => {
        $time = new Date().getTime() - e.response.config.customData.time;
        $size = 0;
        $status = e.response.status;
        $response = undefined;
        return Promise.reject(e);
      }
    );
  });

  let method: Method = 'GET';
  let url = '';

  const handleSubmit = async () => {
    let data;
    try {
      data = JSON.parse(($editor as any).state.doc.toString() || null);
    } catch (e) {
      alert('JSON data is malformed');
      return;
    }
    axios({
      method,
      url: `https://aproxyserver.herokuapp.com/${url}`,
      params: $params.reduce((a, e) => {
        a[e.key] = e.value;
        return a;
      }, {}),
      headers: $headers.reduce((a, e) => {
        a[e.key] = e.value;
        return a;
      }, {}),
      data,
    })
      .then((e) => {
        $response = JSON.stringify(e.data, null, 2);
        $responseHeaders = e.headers;
        $status = e.status;
        $size =
          JSON.stringify(e.data).length + JSON.stringify(e.headers).length;
      })
      .catch((e: Error | AxiosError) => {
        // if (axios.isAxiosError(e)) {
        // } else {
        console.error(e);
        // }
      });
  };
</script>

<main>
  <form on:submit|preventDefault={handleSubmit}>
    <select bind:value={method}>
      <option value="GET">GET</option>
      <option value="POST">POST</option>
      <option value="PUT">PUT</option>
      <option value="PATCH">PATCH</option>
      <option value="DELETE">DELETE</option>
    </select>
    <input bind:value={url} type="url" placeholder="https://example.com" />
    <button type="submit">Send</button>
  </form>

  <Request />
  <Response />
</main>

<style>
  main {
    padding: 20px;
    width: 100%;
  }
  form {
    width: 100%;
    max-width: 640px;
    display: flex;
  }
  select {
    border-top-right-radius: unset;
    border-bottom-right-radius: unset;
    cursor: pointer;
  }
  input {
    flex: 1;
    border-radius: unset;
    margin-left: -1px;
  }
  button {
    border-top-left-radius: unset;
    border-bottom-left-radius: unset;
    margin-left: -1px;
    background-color: #3e84cd;
    color: white;
  }

  /* @media (max-width: 640px) {
    main {
      max-width: 640px;
    }
  } */
</style>
