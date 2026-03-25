import { NextResponse } from 'next/server';

export async function GET() {
  const assetlinks = [
  {
    "relation": [
      "delegate_permission/common.handle_all_urls"
    ],
    "target": {
      "namespace": "android_app",
      "package_name": "com.stormhaven.flycensed",
      "sha256_cert_fingerprints": [
        "A6:A3:08:2D:0B:43:DC:BB:8F:CD:CE:3C:3A:24:63:00:6D:4F:05:2A:D8:4C:A4:64:D5:F4:40:64:62:76:BB:B3"
      ]
    }
  }
];

  return NextResponse.json(assetlinks, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
