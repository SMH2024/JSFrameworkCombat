import { createApp } from 'vue';

// Create a simple event bus for Vue 3
const EventBus = createApp({}).config.globalProperties;
EventBus.$on = EventBus.$on || function() {};
EventBus.$emit = EventBus.$emit || function() {};
EventBus.$off = EventBus.$off || function() {};

// Better approach: use mitt library or create simple emitter
class SimpleEventBus {
  constructor() {
    this.events = {};
  }

  $on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  $emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach(callback => callback(...args));
    }
  }

  $off(event, callback) {
    if (this.events[event]) {
      if (callback) {
        this.events[event] = this.events[event].filter(cb => cb !== callback);
      } else {
        this.events[event] = [];
      }
    }
  }
}

export default new SimpleEventBus();
