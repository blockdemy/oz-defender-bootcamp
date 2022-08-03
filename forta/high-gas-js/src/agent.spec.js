const { provideHandleTransaction } = require("./agent");

describe("high gas agent", () => {
  let handleTransaction;
  const mockHighGasUsedAgent = {
    handleTransaction: jest.fn(),
  };
  const mockHighGasFeeAgent = {
    handleTransaction: jest.fn(),
  };
  const mockTxEvent = {
    some: "event",
  };
  const mockGetTransactionReceipt = jest.fn()

  beforeAll(() => {
    handleTransaction = provideHandleTransaction(
      mockHighGasUsedAgent,
      mockHighGasFeeAgent,
      mockGetTransactionReceipt
    );
  });

  describe("handleTransaction", () => {
    it("invokes highGasUsed and highGasFee agents and returns their findings", async () => {
      const mockFinding = { some: "finding" };
      mockHighGasUsedAgent.handleTransaction.mockReturnValueOnce([mockFinding]);
      mockHighGasFeeAgent.handleTransaction.mockReturnValueOnce([mockFinding]);
      const mockGasUsed = "10"
      mockGetTransactionReceipt.mockReturnValueOnce({ gasUsed: mockGasUsed })

      const findings = await handleTransaction(mockTxEvent);

      expect(findings).toStrictEqual([mockFinding, mockFinding]);
      expect(mockHighGasUsedAgent.handleTransaction).toHaveBeenCalledTimes(1);
      expect(mockHighGasUsedAgent.handleTransaction).toHaveBeenCalledWith(
        mockTxEvent, mockGasUsed
      );
      expect(mockHighGasFeeAgent.handleTransaction).toHaveBeenCalledTimes(1);
      expect(mockHighGasFeeAgent.handleTransaction).toHaveBeenCalledWith(
        mockTxEvent, mockGasUsed
      );
    });
  });
});
