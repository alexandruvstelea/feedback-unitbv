from ...database.main import get_session
from fastapi import APIRouter, Depends, Header
from .schemas import BuildingIn, BuildingOut
from sqlalchemy.ext.asyncio import AsyncSession
from .operations import BuildingsOperations
from http import HTTPStatus
from typing import List
import logging


buildings_router = APIRouter(prefix="/api/buildings")
logger = logging.getLogger(__name__)


@buildings_router.get("/", response_model=List[BuildingOut], status_code=HTTPStatus.OK)
async def get_buildings(
    faculty_id: int = None,
    client_ip: str = Header(None, alias="X-Real-IP"),
    session: AsyncSession = Depends(get_session),
) -> List[BuildingOut]:
    logger.info(f"Received GET request on endpoint /api/buildings from IP {client_ip}.")
    buildings = await BuildingsOperations(session).get_buildings(faculty_id)
    return buildings


@buildings_router.get("/{id}", response_model=BuildingOut, status_code=HTTPStatus.OK)
async def get_building_by_id(
    id: int,
    client_ip: str = Header(None, alias="X-Real-IP"),
    session: AsyncSession = Depends(get_session),
) -> BuildingOut:
    logger.info(
        f"Received GET request on endpoint /api/buildings/id from IP {client_ip}."
    )
    building = await BuildingsOperations(session).get_building_by_id(id)
    return building


@buildings_router.post("/", response_model=BuildingOut, status_code=HTTPStatus.CREATED)
async def add_building(
    building_data: BuildingIn,
    client_ip: str = Header(None, alias="X-Real-IP"),
    session: AsyncSession = Depends(get_session),
) -> BuildingOut:
    logger.info(
        f"Received POST request on endpoint /api/buildings from IP {client_ip}."
    )
    response = await BuildingsOperations(session).add_building(building_data)
    return response


@buildings_router.put("/{id}", response_model=BuildingOut, status_code=HTTPStatus.OK)
async def update_building(
    id: int,
    new_building_data: BuildingIn,
    client_ip: str = Header(None, alias="X-Real-IP"),
    session: AsyncSession = Depends(get_session),
) -> BuildingOut:
    logger.info(
        f"Received PUT request on endpoint /api/buildings/id from IP {client_ip}."
    )
    response = await BuildingsOperations(session).update_building(id, new_building_data)
    return response


@buildings_router.delete("/{id}", status_code=HTTPStatus.OK)
async def delete_building(
    id: int,
    client_ip: str = Header(None, alias="X-Real-IP"),
    session: AsyncSession = Depends(get_session),
) -> str:
    logger.info(
        f"Received DELETE request on endpoint /api/buildings/id from IP {client_ip}."
    )
    response = await BuildingsOperations(session).delete_building(id)
    return response
