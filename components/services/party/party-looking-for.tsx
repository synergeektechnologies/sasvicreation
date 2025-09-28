import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PartyLookingFor() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
              Are You Looking for a Party Makeup Artist in Your City?
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
            <p className="text-lg text-center">
              Book before slots fill up! We offer a variety of rates to ensure affordability without compromising on
              quality or style.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="font-heading text-xl text-foreground mb-4">Natural to Glammed-Up Looks</h3>
                <p className="mb-4">
                  Whether you prefer a natural, fresh look for daytime events or a bold, glamorous style for evening
                  parties, we have the expertise to create exactly what you envision.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Subtle day party makeup</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Glamorous evening looks</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Theme party makeup</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Corporate event styling</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-heading text-xl text-foreground mb-4">Celebrity Experience</h3>
                <p className="mb-4">
                  With experience styling celebrities, models, and high-profile events, we bring that same level of
                  professionalism and expertise to every client.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Celebrity styling experience</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>High-profile event expertise</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Professional photography makeup</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Red carpet ready looks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg">
              <Link href="https://wa.me/917708032077?text=Hi%20Sasvi%20Creations!%20I'm%20interested%20in%20booking%20party%20makeup.%20Could%20you%20please%20share%20more%20details%20about%20your%20party%20makeup%20services%20and%20availability?" target="_blank" rel="noopener noreferrer">
                Book Your Party Look
              </Link>
            </Button>
            <p className="font-body text-muted-foreground text-sm mt-4">
              Limited slots available - Book early to secure your preferred date
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
