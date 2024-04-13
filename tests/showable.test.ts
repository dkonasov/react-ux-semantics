import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useShowable } from "../src";

describe("showable", () => {
  it("should not be showed after initialization", () => {
    const { result } = renderHook(() => useShowable());

    const [isVisible] = result.current;

    expect(isVisible).toBeFalsy();
  });

  it("should be showed after show method was called", () => {
    const { result } = renderHook(() => useShowable());

    const [_, show] = result.current;

    act(() => {
      show();
    });

    const [isVisible] = result.current;

    expect(isVisible).toBeTruthy();
  });

  it("should not be showed after hide method was called", () => {
    const { result } = renderHook(() => useShowable());

    const [_, show, hide] = result.current;

    act(() => {
      show();
    });

    act(() => {
      hide();
    });

    const [isVisible] = result.current;

    expect(isVisible).toBeFalsy();
  });
});
