from datetime import datetime
from sqlalchemy import ForeignKey, func
from sqlalchemy.orm import Mapped, mapped_column, relationship,registry
from sqlalchemy.orm import mapped_as_dataclass

table_registry = registry()
@mapped_as_dataclass(table_registry)
class User:
    __tablename__ = "users"

    user_id: Mapped[int] = mapped_column(
        init=False,
        primary_key=True
    )

    username: Mapped[str] = mapped_column(unique=True)
    password: Mapped[str]

    email: Mapped[str] = mapped_column(unique=True)
    full_name: Mapped[str]

    bio: Mapped[str | None] = mapped_column(default=None)
    avatar_url: Mapped[str | None] = mapped_column(default=None)

    role: Mapped[str] = mapped_column(default="user")
    is_active: Mapped[bool] = mapped_column(default=True)

    created_at: Mapped[datetime] = mapped_column(
        init=False,
        server_default=func.now()
    )

    updated_at: Mapped[datetime] = mapped_column(
        init=False,
        server_default=func.now(),
        onupdate=func.now()
    )


@mapped_as_dataclass(table_registry)
class UserProfileSettings:
    __tablename__ = "user_profile_settings"

    user_id: Mapped[int] = mapped_column(
        ForeignKey("users.user_id"),
        primary_key=True
    )

    social_github: Mapped[str | None] = mapped_column(default=None)
    social_linkedin: Mapped[str | None] = mapped_column(default=None)

    created_at: Mapped[datetime] = mapped_column(
        init=False,
        server_default=func.now()
    )

    updated_at: Mapped[datetime] = mapped_column(
        init=False,
        server_default=func.now(),
        onupdate=func.now()
    )



@mapped_as_dataclass(table_registry)                                     
class Links:                                               
    __tablename__ = "links"                              
                                                                         
    user_id: Mapped[int] = mapped_column(                                
        ForeignKey("users.user_id"),                                     
        primary_key=True                                                 
    )                                                                    
                                                                         
    title : Mapped[str | None] = mapped_column(default=None)      
    url : Mapped[str | None] = mapped_column(default=None)    
                                                                         
    created_at: Mapped[datetime] = mapped_column(                        
        init=False,                                                      
        server_default=func.now()                                        
    )                                                                    
                                                                         
    updated_at: Mapped[datetime] = mapped_column(                        
        init=False,                                                      
        server_default=func.now(),                                       
        onupdate=func.now()                                              
    )


@mapped_as_dataclass(table_registry)  
class Badges:                                                   
    __tablename__ = "Badges"                                    
                                                           
    badge_id: Mapped[int] = mapped_column( init=False,
    primary_key = True)                                                          
                                                               
    name  : Mapped[str | None] = mapped_column(default=None)   
    description : Mapped[str | None] = mapped_column(default=None)     
                                                               
    created_at: Mapped[datetime] = mapped_column(              
        init=False,                                            
        server_default=func.now()                              
    )                                                          
                                                               
@mapped_as_dataclass(table_registry)
class User_Badge:
    __tablename__ = "User_Badge"

    user_id: Mapped[int] = mapped_column(    
           ForeignKey("users.user_id"),         
           primary_key=True                     
    )

    badge_id: Mapped[int] = mapped_column (ForeignKey (Badges.badge_id),primary_key=True)
    
