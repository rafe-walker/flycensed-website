import { NextResponse } from 'next/server';

export async function GET() {
  const association = {
    "applinks": {
        "apps": [],
        "details": [
            {
                "appIDs": [
                    "Q3UWMV4WT6.com.stormhaven.flycensed"
                ],
                "paths": [
                    "/reset-password*"
                ]
            }
        ]
    },
    "webcredentials": {
        "apps": [
            "Q3UWMV4WT6.com.stormhaven.flycensed"
        ]
    }
};

  return NextResponse.json(association, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
