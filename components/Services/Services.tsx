import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils';
import{ useRouter } from 'next/router'
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { services } from '@/data';

type ServiceCardProps = {
  title: string
  description: string

}
interface ServiceItem {
  id: string
  title: string
  description: string
  icon?: string
  link?: string
}
interface Props {
  servicesData: ServiceItem[]
}

  export default function Services({servicesData}: Props) {
    const [hoveredService, setHoveredService] = useState<string | null>(null)
    return (
      <section className="w-full py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I can help you with the following services.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service) => (
              <motion.div
                key={service.id}
                className="relative bg-[#111122] rounded-lg p-6 border border-[#222244] h-full flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6 flex-grow">{service.description}</p>
  
                {service.link && (
                  <motion.a
                    href={service.link}
                    className="inline-flex items-center text-[#6e8fff] hover:text-[#8ea5ff] transition-colors"
                    animate={{
                      x: hoveredService === service.id ? 5 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.a>
                )}
  
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#3b5bdb] to-[#4c6ef5] opacity-0"
                  style={{ mixBlendMode: "overlay" }}
                  animate={{
                    opacity: hoveredService === service.id ? 0.15 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }
