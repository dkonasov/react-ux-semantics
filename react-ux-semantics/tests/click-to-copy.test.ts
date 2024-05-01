import { describe, it, vi, expect, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";

import { useClickToCopy } from "../src/click-to-copy";

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

const navigatorMock: DeepPartial<Navigator> = {
  clipboard: {
    writeText: vi.fn(() => Promise.resolve()),
  },
};

vi.stubGlobal("navigator", navigatorMock);

describe("click to copy", () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it("should call clipboard method of we API when handler is called", async () => {
    const { result } = renderHook(() => useClickToCopy("henlo, fren!"));
    const [handler] = result.current;

    await act(() => handler());

    expect(navigatorMock.clipboard?.writeText).toHaveBeenCalledWith(
      "henlo, fren!",
    );
  });

  it("should resolve promise when text was copied to clipboard", async () => {
    const { result } = renderHook(() => useClickToCopy("henlo, fren!"));
    const [handler, promise] = result.current;

    await act(() => handler());

    await expect(promise).resolves.toBeFalsy();
  });
});
