import { useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SITE_CONTENT } from "@/data";

const KPRCalculator = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { kpr } = SITE_CONTENT;

  const [hargaRumah, setHargaRumah] = useState(kpr.defaultValues.housePrice);
  const [dpPercent, setDpPercent] = useState(kpr.defaultValues.dpPercent);
  const [bungaTahunan, setBungaTahunan] = useState(kpr.defaultValues.interestRate);
  const [tenor, setTenor] = useState(kpr.defaultValues.tenor);

  const calculateMonthlyPayment = useCallback(() => {
    const downPayment = (hargaRumah * dpPercent) / 100;
    const principal = hargaRumah - downPayment;
    const monthlyRate = bungaTahunan / 100 / 12;
    const numberOfPayments = tenor * 12;

    if (monthlyRate === 0) {
      return principal / numberOfPayments;
    }

    const payment =
      (principal *
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    return payment;
  }, [hargaRumah, dpPercent, bungaTahunan, tenor]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const monthlyPayment = calculateMonthlyPayment();
  const downPaymentAmount = (hargaRumah * dpPercent) / 100;

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block w-12 h-px bg-gold mb-8" />
            <h2 className="luxury-heading text-3xl md:text-4xl lg:text-5xl mb-6">
              {kpr.title}
            </h2>
            <p className="luxury-body text-base md:text-lg max-w-2xl mx-auto">
              {kpr.description}
            </p>
          </div>

          {/* Calculator Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-background border-2 border-gold/30 p-8 lg:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Inputs */}
              <div className="space-y-8">
                {/* Harga Rumah */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="font-sans text-sm font-medium tracking-wider uppercase text-charcoal">
                      {kpr.labels.housePrice}
                    </label>
                    <span className="font-sans text-sm text-gold font-medium">
                      {formatCurrency(hargaRumah)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={100000000}
                    max={3000000000}
                    step={10000000}
                    value={hargaRumah}
                    onChange={(e) => setHargaRumah(Number(e.target.value))}
                    className="w-full h-2 bg-muted rounded-sm appearance-none cursor-pointer accent-gold [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-gold [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:bg-gold [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
                  />
                </div>

                {/* Uang Muka */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="font-sans text-sm font-medium tracking-wider uppercase text-charcoal">
                      {kpr.labels.downPayment}
                    </label>
                    <span className="font-sans text-sm text-gold font-medium">
                      {dpPercent}% ({formatCurrency(downPaymentAmount)})
                    </span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={50}
                    step={5}
                    value={dpPercent}
                    onChange={(e) => setDpPercent(Number(e.target.value))}
                    className="w-full h-2 bg-muted rounded-sm appearance-none cursor-pointer accent-gold [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-gold [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:bg-gold [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
                  />
                </div>

                {/* Bunga Tahunan */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="font-sans text-sm font-medium tracking-wider uppercase text-charcoal">
                      {kpr.labels.interestRate}
                    </label>
                    <span className="font-sans text-sm text-gold font-medium">
                      {bungaTahunan}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={15}
                    step={0.5}
                    value={bungaTahunan}
                    onChange={(e) => setBungaTahunan(Number(e.target.value))}
                    className="w-full h-2 bg-muted rounded-sm appearance-none cursor-pointer accent-gold [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-gold [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:bg-gold [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
                  />
                </div>

                {/* Tenor */}
                <div>
                  <label className="font-sans text-sm font-medium tracking-wider uppercase text-charcoal block mb-3">
                    {kpr.labels.tenure}
                  </label>
                  <div className="flex gap-3">
                    {kpr.tenorOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => setTenor(option)}
                        className={`flex-1 py-3 font-sans text-sm tracking-wider transition-all duration-300 ${
                          tenor === option
                            ? "bg-gold text-background"
                            : "bg-muted text-charcoal hover:bg-gold/10"
                        }`}
                      >
                        {option} Tahun
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Result */}
              <div className="flex flex-col justify-center items-center lg:border-l lg:border-border lg:pl-12">
                <div className="text-center">
                  <span className="font-sans text-sm tracking-wider uppercase text-charcoal-soft block mb-4">
                    {kpr.labels.monthlyPayment}
                  </span>
                  <span className="font-serif text-4xl lg:text-5xl font-semibold text-gold">
                    {formatCurrency(monthlyPayment)}
                  </span>
                  <div className="mt-8 space-y-2 text-sm font-sans text-charcoal-soft">
                    <p>
                      {kpr.labels.loanAmount}:{" "}
                      <span className="text-charcoal font-medium">
                        {formatCurrency(hargaRumah - downPaymentAmount)}
                      </span>
                    </p>
                    <p>
                      {kpr.labels.totalPayment}:{" "}
                      <span className="text-charcoal font-medium">
                        {formatCurrency(monthlyPayment * tenor * 12)}
                      </span>
                    </p>
                  </div>
                  <a
                    href={kpr.ctaHref}
                    className="inline-block mt-8 luxury-button bg-gold text-background hover:bg-gold-light transition-all duration-300"
                  >
                    {kpr.ctaText}
                  </a>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="mt-10 pt-6 border-t border-border text-xs font-sans text-charcoal-soft text-center">
              {kpr.disclaimer}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default KPRCalculator;
