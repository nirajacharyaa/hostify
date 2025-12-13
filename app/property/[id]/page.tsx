import AboutProperty from "@/components/property/about-property";
import Amenities from "@/components/property/amnities";
import BookingWidget from "@/components/property/booking-widget";
import FeaturesList from "@/components/property/features";
import Gallery from "@/components/property/gallery";
import MapSection from "@/components/property/map";
import SimilarStays from "@/components/property/similar-stays";
import { getProperty } from "@/lib/api";

// const property = {
//   id: "prop-001",
//   name: "Cozy Mountain Cabin Retreat",
//   description:
//     "<h1>Welcome to Brightwoods Cabin!</h1><p>Your idyllic retreat nestled in the heart of Bridlepath, Ontario! Our cozy cabin, surrounded by the tranquility of nature's embrace, is designed to provide the ultimate relaxing getaway.</p><h2>Cabin Features</h2><p><strong>Living Space:</strong> This charming cabin boasts a spacious living area adorned with rustic decor and modern amenities. Enjoy the warmth of the wood-burning fireplace, relax on the plush sofas, and make yourself at home with our entertainment center featuring a flat-screen TV, WiFi, and more.</p><p><strong>Bedrooms:</strong> With 3 beautifully appointed bedrooms, our cabin comfortably accommodates up to [number of guests]. Each room is furnished with luxurious bedding and unique woodland-inspired touches to ensure a restful slumber.</p><p><strong>Kitchen & Dining:</strong> Our fully-equipped kitchen offers everything you need to prepare delicious home-cooked meals. The open dining area provides a welcoming space to enjoy meals with friends and family.</p><p><strong>Bathrooms:</strong> 2 modern bathrooms stocked with fresh towels, toiletries, and all essential amenities add to your convenience.</p><p><strong>Outdoor Space:</strong> Step outside to a serene outdoor setting. Whether it's a morning coffee on the porch, a BBQ in the yard, or a soothing evening by the fire pit, the beauty of Bridlepath is at your doorstep.</p><p><strong>Location:</strong> Located just minutes from [local attractions, trails, dining, shopping], our cabin offers the perfect base to explore the best of the region or simply unwind in seclusion.</p><h2>Hosted with Love</h2><p>We take pride in hosting our guests and are committed to making your stay unforgettable. We're just a call or message away should you need anything during your stay.</p><p>Come, be our guest at [Cabin Name], and experience a piece of woodland serenity right here in Bridlepath, Ontario. **Book now and make yourself at home!**</p>",
//   price: 145,
//   numberOfReviews: 127,
//   averageRating: 4.8,
//   location: "Asheville, North Carolina",
//   hostName: "Sarah Mitchell",
//   superhost: true,
//   bedrooms: 2,
//   detail:
//     "Welcome to Brightwoods Cabin, your idyllic retreat nestled in the heart of Bridlepath, Ontario! Our cozy cabin, surrounded by the tranquility of nature's embrace, is designed to provide the ultimate relaxing getaway.",
//   bathrooms: 1,
//   maxGuests: 4,
//   image: "/properties/1.png",
//   images: [
//     "/properties/1.png",
//     "/properties/2.png",
//     "/properties/3.png",
//     "/properties/4.png",
//     "/properties/5.png",
//     "/properties/6.png",
//   ],
// };
const PropertyPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const propertyId = (await params).id;

  const propertyResponse = await getProperty(propertyId);
  console.log(propertyResponse);
  if (!propertyResponse.success) {
    return null;
  }

  const { property, similarProperties } = propertyResponse.data;
  console.log(property, similarProperties);
  return (
    <section>
      <div className="container mx-auto py-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7">
            <Gallery images={property?.images} />
          </div>

          <div className="lg:col-span-5">
            <BookingWidget property={property} />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7">
            <AboutProperty aboutHtml={property.description} />
          </div>

          <div className="lg:col-span-5">
            <FeaturesList />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7">
            <Amenities />
          </div>

          <div className="lg:col-span-5">
            <MapSection locationName={property.location} />
          </div>
        </div>
        <div>
          <SimilarStays properties={similarProperties} />
        </div>
      </div>
    </section>
  );
};

export default PropertyPage;
