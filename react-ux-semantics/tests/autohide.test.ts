import { describe, it, expect, beforeEach, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useAutohide } from "../src";

describe("autohide", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it("should not be showed after initialization", () => {
    const { result } = renderHook(() => useAutohide());

    const [isVisible] = result.current;

    expect(isVisible).toBeFalsy();
  });

  it("should be showed after show method is called", () => {
    const { result } = renderHook(() => useAutohide());

    const [_, show] = result.current;

    act(() => {
      show();
    });

    expect(result.current[0]).toBeTruthy();
  });

  it("should be hidden after timeout", () => {
    const { result } = renderHook(() => useAutohide(1000));

    const [_, show] = result.current;

    act(() => {
      show();
    });

    act(() => {
      vi.advanceTimersByTime(1001);
    });

    expect(result.current[0]).toBeFalsy();
  });

  it("should be hidden after hide method is called", () => {
    const { result } = renderHook(() => useAutohide());

    const [_, show, hide] = result.current;

    act(() => {
      show();
    });

    act(() => {
      hide();
    });

    expect(result.current[0]).toBeFalsy();
  });

  it("default timeout should be 5000", () => {
    const { result } = renderHook(() => useAutohide());

    const [_, show] = result.current;

    act(() => {
      show();
    });

    act(() => {
      vi.advanceTimersByTime(4999);
    });

    expect(result.current[0]).toBeTruthy();

    act(() => {
      vi.advanceTimersByTime(2);
    });

    expect(result.current[0]).toBeFalsy();
  });
});
