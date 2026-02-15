export async function initMocks() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  if (typeof window !== "undefined") {
    const { worker } = await import("./browser");
    await worker.start({
      onUnhandledRequest: "bypass",
    });
  } else {
    const { server } = await import("./server");
    server.listen({
      onUnhandledRequest: "bypass",
    });
  }
}
