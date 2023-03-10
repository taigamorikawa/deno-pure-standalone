// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
/**
 * A collection of APIs to provide help with asynchronous tasks like
 * delays, debouncing, deferreds or pooling.
 *
 * @module
 */ export * from "./abortable.ts";
export * from "./deadline.ts";
export * from "./debounce.ts";
export * from "./deferred.ts";
export * from "./delay.ts";
export * from "./mux_async_iterator.ts";
export * from "./pool.ts";
export * from "./tee.ts";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHBzOi8vZGVuby5sYW5kL3N0ZEAwLjE1MC4wL2FzeW5jL21vZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgMjAxOC0yMDIyIHRoZSBEZW5vIGF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIE1JVCBsaWNlbnNlLlxuXG4vKipcbiAqIEEgY29sbGVjdGlvbiBvZiBBUElzIHRvIHByb3ZpZGUgaGVscCB3aXRoIGFzeW5jaHJvbm91cyB0YXNrcyBsaWtlXG4gKiBkZWxheXMsIGRlYm91bmNpbmcsIGRlZmVycmVkcyBvciBwb29saW5nLlxuICpcbiAqIEBtb2R1bGVcbiAqL1xuXG5leHBvcnQgKiBmcm9tIFwiLi9hYm9ydGFibGUudHNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2RlYWRsaW5lLnRzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9kZWJvdW5jZS50c1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vZGVmZXJyZWQudHNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2RlbGF5LnRzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9tdXhfYXN5bmNfaXRlcmF0b3IudHNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3Bvb2wudHNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RlZS50c1wiO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBFQUEwRTtBQUUxRTs7Ozs7Q0FLQyxHQUVELGNBQWMsaUJBQWlCO0FBQy9CLGNBQWMsZ0JBQWdCO0FBQzlCLGNBQWMsZ0JBQWdCO0FBQzlCLGNBQWMsZ0JBQWdCO0FBQzlCLGNBQWMsYUFBYTtBQUMzQixjQUFjLDBCQUEwQjtBQUN4QyxjQUFjLFlBQVk7QUFDMUIsY0FBYyxXQUFXIn0=